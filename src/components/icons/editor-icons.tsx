import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function VSCodeIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.583.063a1.5 1.5 0 0 0-1.032.392 1.5 1.5 0 0 0-.001 0L7.47 9.174 3.46 6.06a1 1 0 0 0-1.254.049L.49 7.685a1 1 0 0 0 0 1.479l3.398 3.1L.49 15.364a1 1 0 0 0 0 1.479l1.716 1.576a1 1 0 0 0 1.254.049l4.01-3.115 9.08 8.72a1.5 1.5 0 0 0 1.033.391 1.5 1.5 0 0 0 .667-.16l4.243-2.1a1.5 1.5 0 0 0 .833-1.345V3.605a1.5 1.5 0 0 0-.833-1.345l-4.243-2.1a1.5 1.5 0 0 0-.667-.097zM18.3 7.264v9.472L11.36 12.268z" />
    </svg>
  );
}

export function CursorIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.727 2.148l14.546 9.26a.667.667 0 0 1 .006 1.13l-5.076 3.281 3.528 5.674a.667.667 0 0 1-.214.905l-2.372 1.494a.667.667 0 0 1-.913-.198L11.77 18.02l-4.1 3.892a.667.667 0 0 1-1.107-.5V2.796a.667.667 0 0 1 1.064-.534z" />
    </svg>
  );
}

export function WindsurfIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4c0 8.8 7.2 16 16 16h1L9.2 4z" />
      <path d="M3 4c0 8.8 7.2 16 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ZedIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.4 3.6h19.2L2.4 20.4h19.2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IntelliJIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0v24h24V0zm2.4 2.4h7.2v1.2H5.04v4.8H9.6V9.6H3.6V3.6zm8.4 0h2.64l2.16 5.04L17.76 2.4H20.4v7.2h-2.16V4.8l-2.04 4.8h-1.68l-2.04-4.8v4.8H10.8zm-7.2 12h9.6v1.8H3.6z" />
    </svg>
  );
}

export function AntigravityIcon({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.25h-13L12 6.5z" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  );
}
