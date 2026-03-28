"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX_SHADER = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseRadius;

  varying float vElevation;
  varying float vDistToMouse;

  void main() {
    vec3 pos = position;

    // Layered sine wave displacement
    float wave1 = sin(uTime * 0.4 + pos.x * 0.8 + pos.y * 0.3) * 0.35;
    float wave2 = sin(uTime * 0.6 + pos.x * 0.5 - pos.y * 0.7) * 0.25;
    float wave3 = sin(uTime * 0.3 + pos.x * 1.2 + pos.y * 0.9) * 0.15;
    float wave4 = cos(uTime * 0.5 + pos.y * 0.6) * 0.2;

    float elevation = wave1 + wave2 + wave3 + wave4;

    // Mouse interaction — localized ripple
    float distToMouse = length(pos.xy - uMouse);
    float mouseEffect = smoothstep(uMouseRadius, 0.0, distToMouse);
    float ripple = sin(distToMouse * 8.0 - uTime * 3.0) * mouseEffect * 0.6;
    elevation += ripple;

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
    // Base color: teal wireframe
    float intensity = 0.15 + vElevation * 0.12;

    // Brighten near mouse
    intensity += vDistToMouse * 0.4;

    // Teal color with white highlights
    vec3 teal = vec3(0.0, 0.722, 0.831); // #00b8d4
    vec3 white = vec3(1.0, 1.0, 1.0);
    vec3 color = mix(teal, white, vDistToMouse * 0.6 + vElevation * 0.15);

    gl_FragColor = vec4(color, intensity);
  }
`;

export function HeroWireframe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    // Low angle, looking down at the plane
    camera.position.set(0, -3.5, 4.5);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Plane geometry — high subdivision wireframe
    const geometry = new THREE.PlaneGeometry(14, 10, 96, 96);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(999, 999) },
      uMouseRadius: { value: 2.5 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      wireframe: true,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    // Tilt for perspective
    mesh.rotation.x = -Math.PI * 0.38;
    mesh.position.y = 0.5;
    scene.add(mesh);

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(mesh);
      if (intersects.length > 0) {
        const p = intersects[0].point;
        mouseRef.current.targetX = p.x;
        mouseRef.current.targetY = p.y;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 999;
      mouseRef.current.targetY = 999;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      uniforms.uTime.value = elapsed;
      uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    cleanupRef.current = () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto absolute inset-0 z-0"
      style={{ minHeight: "100%" }}
    />
  );
}
