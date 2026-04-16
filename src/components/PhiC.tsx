/**
 * Φc — rendered as bold Phi with subscript bold c.
 * Always use this component to represent the closure metric.
 */
export function PhiC({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-bold">
        Φ<sub className="font-bold">c</sub>
      </span>
    </span>
  );
}
