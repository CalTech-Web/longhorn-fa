"use client";

type Variant = "blueprint" | "schematic" | "drafting" | "measurement" | "compass";

function SchematicLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="schematic-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(216,77,26,0.12)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#schematic-grid)" />
      {/* Circuit-style paths */}
      <path d="M 0 30% L 15% 30% L 15% 50% L 30% 50%" fill="none" stroke="rgba(216,77,26,0.35)" strokeWidth="1" strokeDasharray="8 6" className="animate-dash-right" />
      <path d="M 40% 20% L 55% 20% L 55% 40% L 70% 40% L 70% 60%" fill="none" stroke="rgba(216,77,26,0.3)" strokeWidth="1" strokeDasharray="10 8" className="animate-dash-right" />
      <path d="M 60% 80% L 80% 80% L 80% 55% L 100% 55%" fill="none" stroke="rgba(216,77,26,0.25)" strokeWidth="1" strokeDasharray="6 10" className="animate-dash-left" />
      {/* Connection nodes */}
      <g className="animate-fade-pulse">
        <circle cx="15%" cy="30%" r="4" fill="none" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        <circle cx="15%" cy="50%" r="4" fill="none" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        <circle cx="55%" cy="20%" r="4" fill="none" stroke="rgba(216,77,26,0.35)" strokeWidth="1" />
        <circle cx="70%" cy="40%" r="4" fill="none" stroke="rgba(216,77,26,0.35)" strokeWidth="1" />
      </g>
      {/* Device symbols */}
      <g className="animate-fade-pulse-delayed">
        <rect x="28%" y="47%" width="5%" height="6%" fill="none" stroke="rgba(216,77,26,0.3)" strokeWidth="1" rx="1" />
        <rect x="68%" y="57%" width="4%" height="5%" fill="none" stroke="rgba(216,77,26,0.25)" strokeWidth="1" rx="1" />
      </g>
      <line x1="0" y1="65%" x2="100%" y2="65%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" strokeDasharray="4 12" className="animate-dash-right-slow" />
    </svg>
  );
}

function DraftingLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="draft-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(216,77,26,0.1)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#draft-grid)" />
      {/* T-square horizontal lines */}
      <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(216,77,26,0.3)" strokeWidth="1" strokeDasharray="16 6" className="animate-dash-right" />
      <line x1="0" y1="55%" x2="100%" y2="55%" stroke="rgba(216,77,26,0.25)" strokeWidth="1" strokeDasharray="12 8" className="animate-dash-left" />
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(216,77,26,0.2)" strokeWidth="0.5" strokeDasharray="8 12" className="animate-dash-right-slow" />
      {/* Triangle lines */}
      <line x1="20%" y1="0" x2="20%" y2="100%" stroke="rgba(216,77,26,0.2)" strokeWidth="0.5" strokeDasharray="10 10" className="animate-dash-down" />
      <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" strokeDasharray="8 14" className="animate-dash-up" />
      {/* Drafting triangle */}
      <g className="animate-fade-pulse">
        <path d="M 60% 15% L 60% 35% L 80% 35% Z" fill="none" stroke="rgba(216,77,26,0.25)" strokeWidth="1" />
        <path d="M 60% 30% A 5 5 0 0 1 65% 35%" fill="none" stroke="rgba(216,77,26,0.3)" strokeWidth="1" />
      </g>
      {/* Title block */}
      <g className="animate-fade-pulse-delayed">
        <rect x="70%" y="75%" width="20%" height="15%" fill="none" stroke="rgba(216,77,26,0.2)" strokeWidth="1" />
        <line x1="70%" y1="82%" x2="90%" y2="82%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
        <line x1="70%" y1="87%" x2="90%" y2="87%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function MeasurementLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="meas-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(216,77,26,0.1)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#meas-grid)" />
      {/* Ruler marks top */}
      <g className="animate-fade-pulse">
        <line x1="5%" y1="15%" x2="45%" y2="15%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        <line x1="5%" y1="12%" x2="5%" y2="18%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        <line x1="15%" y1="13%" x2="15%" y2="17%" stroke="rgba(216,77,26,0.3)" strokeWidth="0.5" />
        <line x1="25%" y1="12%" x2="25%" y2="18%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        <line x1="35%" y1="13%" x2="35%" y2="17%" stroke="rgba(216,77,26,0.3)" strokeWidth="0.5" />
        <line x1="45%" y1="12%" x2="45%" y2="18%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
      </g>
      {/* Scale bar bottom */}
      <g className="animate-fade-pulse-delayed">
        <line x1="55%" y1="75%" x2="90%" y2="75%" stroke="rgba(216,77,26,0.35)" strokeWidth="1" />
        <line x1="55%" y1="72%" x2="55%" y2="78%" stroke="rgba(216,77,26,0.35)" strokeWidth="1" />
        <line x1="66.7%" y1="73%" x2="66.7%" y2="77%" stroke="rgba(216,77,26,0.25)" strokeWidth="0.5" />
        <line x1="78.3%" y1="73%" x2="78.3%" y2="77%" stroke="rgba(216,77,26,0.25)" strokeWidth="0.5" />
        <line x1="90%" y1="72%" x2="90%" y2="78%" stroke="rgba(216,77,26,0.35)" strokeWidth="1" />
      </g>
      {/* Flowing dashed lines */}
      <line x1="0" y1="40%" x2="100%" y2="40%" stroke="rgba(216,77,26,0.2)" strokeWidth="1" strokeDasharray="14 8" className="animate-dash-right" />
      <line x1="0" y1="60%" x2="100%" y2="60%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" strokeDasharray="8 12" className="animate-dash-left" />
      <line x1="40%" y1="0" x2="40%" y2="100%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" strokeDasharray="10 10" className="animate-dash-down" />
      {/* Caliper shape */}
      <g className="animate-fade-pulse">
        <path d="M 10% 60% L 10% 85% M 30% 60% L 30% 85%" fill="none" stroke="rgba(216,77,26,0.2)" strokeWidth="1" />
        <line x1="10%" y1="72%" x2="30%" y2="72%" stroke="rgba(216,77,26,0.25)" strokeWidth="0.5" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}

function CompassLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="compass-grid" width="70" height="70" patternUnits="userSpaceOnUse">
          <path d="M 70 0 L 0 0 0 70" fill="none" stroke="rgba(216,77,26,0.1)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#compass-grid)" />
      {/* Compass arcs */}
      <g className="animate-fade-pulse">
        <circle cx="30%" cy="45%" r="15%" fill="none" stroke="rgba(216,77,26,0.25)" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="30%" cy="45%" r="8%" fill="none" stroke="rgba(216,77,26,0.2)" strokeWidth="0.5" />
        <line x1="30%" y1="44%" x2="30%" y2="46%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        <line x1="29%" y1="45%" x2="31%" y2="45%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
      </g>
      {/* Protractor arc */}
      <g className="animate-fade-pulse-delayed">
        <path d="M 60% 70% A 20 20 0 0 1 85% 50%" fill="none" stroke="rgba(216,77,26,0.3)" strokeWidth="1" />
        <path d="M 63% 67% A 16 16 0 0 1 82% 53%" fill="none" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="60%" y1="70%" x2="85%" y2="50%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
      </g>
      {/* Horizontal flowing lines */}
      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(216,77,26,0.2)" strokeWidth="1" strokeDasharray="12 8" className="animate-dash-right" />
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" strokeDasharray="6 14" className="animate-dash-left" />
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(216,77,26,0.12)" strokeWidth="0.5" strokeDasharray="8 12" className="animate-dash-down" />
      {/* Small annotation */}
      <g className="animate-fade-pulse">
        <rect x="75%" y="15%" width="12%" height="8%" fill="none" stroke="rgba(216,77,26,0.2)" strokeWidth="0.5" />
        <line x1="75%" y1="20%" x2="87%" y2="20%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

export default function HeroBackground({ variant = "blueprint" }: { variant?: Variant }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal-light)] to-[var(--color-charcoal)]" />
      {variant === "schematic" && <SchematicLines />}
      {variant === "drafting" && <DraftingLines />}
      {variant === "measurement" && <MeasurementLines />}
      {variant === "compass" && <CompassLines />}
    </div>
  );
}
