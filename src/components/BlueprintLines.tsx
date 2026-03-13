"use client";

export default function BlueprintLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Animated dash for horizontal lines */}
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(216,77,26,0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Blueprint grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Horizontal traveling lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(216,77,26,0.12)" strokeWidth="0.5" strokeDasharray="12 8" className="animate-dash-right" />
        <line x1="0" y1="45%" x2="100%" y2="45%" stroke="rgba(216,77,26,0.08)" strokeWidth="0.5" strokeDasharray="20 12" className="animate-dash-left" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(216,77,26,0.10)" strokeWidth="0.5" strokeDasharray="8 16" className="animate-dash-right-slow" />

        {/* Vertical traveling lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(216,77,26,0.08)" strokeWidth="0.5" strokeDasharray="16 10" className="animate-dash-down" />
        <line x1="65%" y1="0" x2="65%" y2="100%" stroke="rgba(216,77,26,0.06)" strokeWidth="0.5" strokeDasharray="10 14" className="animate-dash-up" />

        {/* Diagonal construction lines */}
        <line x1="0" y1="100%" x2="40%" y2="0" stroke="rgba(216,77,26,0.05)" strokeWidth="0.5" strokeDasharray="6 12" className="animate-dash-right" />
        <line x1="60%" y1="100%" x2="100%" y2="0" stroke="rgba(216,77,26,0.05)" strokeWidth="0.5" strokeDasharray="6 12" className="animate-dash-left" />

        {/* Dimension markers */}
        {/* Top dimension line */}
        <g className="animate-fade-pulse">
          <line x1="10%" y1="12%" x2="35%" y2="12%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
          <line x1="10%" y1="10%" x2="10%" y2="14%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
          <line x1="35%" y1="10%" x2="35%" y2="14%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
        </g>

        {/* Right dimension line */}
        <g className="animate-fade-pulse-delayed">
          <line x1="85%" y1="30%" x2="85%" y2="60%" stroke="rgba(216,77,26,0.12)" strokeWidth="0.5" />
          <line x1="83%" y1="30%" x2="87%" y2="30%" stroke="rgba(216,77,26,0.12)" strokeWidth="0.5" />
          <line x1="83%" y1="60%" x2="87%" y2="60%" stroke="rgba(216,77,26,0.12)" strokeWidth="0.5" />
        </g>

        {/* Crosshair marker */}
        <g className="animate-fade-pulse">
          <circle cx="50%" cy="50%" r="8" fill="none" stroke="rgba(216,77,26,0.08)" strokeWidth="0.5" />
          <line x1="48%" y1="50%" x2="52%" y2="50%" stroke="rgba(216,77,26,0.10)" strokeWidth="0.5" />
          <line x1="50%" y1="48%" x2="50%" y2="52%" stroke="rgba(216,77,26,0.10)" strokeWidth="0.5" />
        </g>

        {/* Angle arc */}
        <g className="animate-fade-pulse-delayed">
          <path d="M 15% 85% L 15% 70% L 25% 85% Z" fill="none" stroke="rgba(216,77,26,0.08)" strokeWidth="0.5" />
          <path d="M 15% 80% A 5 5 0 0 1 20% 85%" fill="none" stroke="rgba(216,77,26,0.10)" strokeWidth="0.5" />
        </g>

        {/* Small rectangle (room outline) */}
        <g className="animate-fade-pulse">
          <rect x="70%" y="70%" width="15%" height="12%" fill="none" stroke="rgba(216,77,26,0.07)" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="70%" y1="70%" x2="85%" y2="82%" stroke="rgba(216,77,26,0.04)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
