"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  uniform float uTime;
  uniform vec2 uMouse;

  varying float vElevation;
  varying float vDistToMouse;

  void main() {
    vec3 pos = position;

    // Gentle layered sine waves — slow, calm
    float wave1 = sin(uTime * 0.2 + pos.x * 0.6 + pos.y * 0.3) * 0.18;
    float wave2 = sin(uTime * 0.35 + pos.x * 0.4 - pos.y * 0.5) * 0.12;
    float wave3 = cos(uTime * 0.25 + pos.y * 0.5) * 0.08;

    float elevation = wave1 + wave2 + wave3;

    // Mouse push — subtle displacement near cursor
    float dist = length(pos.xy - uMouse);
    float mouseEffect = smoothstep(3.0, 0.0, dist);
    elevation += mouseEffect * 0.4;

    pos.z += elevation;

    vElevation = elevation;
    vDistToMouse = mouseEffect;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  varying float vElevation;
  varying float vDistToMouse;

  void main() {
    // Very subtle teal grid
    float intensity = 0.07 + vElevation * 0.03;

    // Brighten where mouse pushes
    intensity += vDistToMouse * 0.2;

    vec3 teal = vec3(0.0, 0.722, 0.831);
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 color = mix(teal, white, vDistToMouse * 0.4);

    gl_FragColor = vec4(color, intensity);
  }
`;

export function HeroWireframe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 999, y: 999, tx: 999, ty: 999 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, -3.5, 4.5);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Square grid — use EdgesGeometry from a PlaneGeometry to get QUAD wireframe
    const segW = 80;
    const segH = 60;
    const planeW = 14;
    const planeH = 10;

    // Create a grid of line segments manually (squares, not triangles)
    const positions: number[] = [];
    const stepX = planeW / segW;
    const stepY = planeH / segH;
    const halfW = planeW / 2;
    const halfH = planeH / 2;

    // Horizontal lines
    for (let j = 0; j <= segH; j++) {
      const y = -halfH + j * stepY;
      for (let i = 0; i < segW; i++) {
        const x1 = -halfW + i * stepX;
        const x2 = x1 + stepX;
        positions.push(x1, y, 0, x2, y, 0);
      }
    }

    // Vertical lines
    for (let i = 0; i <= segW; i++) {
      const x = -halfW + i * stepX;
      for (let j = 0; j < segH; j++) {
        const y1 = -halfH + j * stepY;
        const y2 = y1 + stepY;
        positions.push(x, y1, 0, x, y2, 0);
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(999, 999) },
    };

    const lineMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    linesMesh.rotation.x = -Math.PI * 0.38;
    linesMesh.position.y = 0.5;
    scene.add(linesMesh);

    // Invisible plane for raycasting mouse position
    const hitGeometry = new THREE.PlaneGeometry(planeW, planeH);
    const hitMaterial = new THREE.MeshBasicMaterial({
      visible: false,
      side: THREE.DoubleSide,
    });
    const hitPlane = new THREE.Mesh(hitGeometry, hitMaterial);
    hitPlane.rotation.x = -Math.PI * 0.38;
    hitPlane.position.y = 0.5;
    scene.add(hitPlane);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(hitPlane);
      if (hits.length > 0) {
        // Transform hit point to local space of the linesMesh
        const local = linesMesh.worldToLocal(hits[0].point.clone());
        mouseRef.current.tx = local.x;
        mouseRef.current.ty = local.y;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.tx = 999;
      mouseRef.current.ty = 999;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth lerp mouse
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.06;

      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      hitGeometry.dispose();
      hitMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto absolute inset-0 z-0"
    />
  );
}
