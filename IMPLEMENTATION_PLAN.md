# Implementation Plan: Forge & Circuit Analyzer

## Objective
Add PCD Forge (monomer composition table) and Circuit Analyzer (node graph) sections to brik64.com homepage after Platform [04], then deploy.

## Strategy
1. Create ForgeSection component with 2x 8×8 periodic-table-style grids
2. Create CircuitAnalyzerSection with SVG node graph + Manhattan routing
3. Integrate both into homepage after PlatformSection
4. Build, deploy to CF Pages
5. (Future) Implement in brik64-platform dashboard

## Design Decisions (Approved)
- Forge: compact layout, periodic-table cells (aspect-ratio:1), badge pill top-right
- Analyzer: SVG canvas with grid lines, Manhattan routing, light/dark compatible
- Placement: after [04] THE PLATFORM as [04.1] and [04.2]
- Cells: Jura number, MC_XX id, operation name, family label
- Active state: dark bg, white text, teal name, glow
- Idle state: light gray, muted text
