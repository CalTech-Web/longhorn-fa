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
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Blueprint grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Horizontal traveling lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" strokeDasharray="12 8" className="animate-dash-right" />
        <line x1="0" y1="45%" x2="100%" y2="45%" stroke="rgba(216,77,26,0.3)" strokeWidth="1" strokeDasharray="20 12" className="animate-dash-left" />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(216,77,26,0.35)" strokeWidth="1" strokeDasharray="8 16" className="animate-dash-right-slow" />

        {/* Vertical traveling lines */}
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(216,77,26,0.3)" strokeWidth="1" strokeDasharray="16 10" className="animate-dash-down" />
        <line x1="65%" y1="0" x2="65%" y2="100%" stroke="rgba(216,77,26,0.25)" strokeWidth="1" strokeDasharray="10 14" className="animate-dash-up" />

        {/* Diagonal construction lines */}
        <line x1="0" y1="100%" x2="40%" y2="0" stroke="rgba(216,77,26,0.2)" strokeWidth="0.5" strokeDasharray="6 12" className="animate-dash-right" />
        <line x1="60%" y1="100%" x2="100%" y2="0" stroke="rgba(216,77,26,0.2)" strokeWidth="0.5" strokeDasharray="6 12" className="animate-dash-left" />

        {/* Dimension markers — top */}
        <g className="animate-fade-pulse">
          <line x1="10%" y1="12%" x2="35%" y2="12%" stroke="rgba(216,77,26,0.5)" strokeWidth="1" />
          <line x1="10%" y1="9%" x2="10%" y2="15%" stroke="rgba(216,77,26,0.5)" strokeWidth="1" />
          <line x1="35%" y1="9%" x2="35%" y2="15%" stroke="rgba(216,77,26,0.5)" strokeWidth="1" />
        </g>

        {/* Dimension markers — right */}
        <g className="animate-fade-pulse-delayed">
          <line x1="85%" y1="30%" x2="85%" y2="60%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
          <line x1="82%" y1="30%" x2="88%" y2="30%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
          <line x1="82%" y1="60%" x2="88%" y2="60%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        </g>

        {/* Crosshair marker */}
        <g className="animate-fade-pulse">
          <circle cx="50%" cy="50%" r="12" fill="none" stroke="rgba(216,77,26,0.3)" strokeWidth="1" />
          <line x1="47%" y1="50%" x2="53%" y2="50%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
          <line x1="50%" y1="47%" x2="50%" y2="53%" stroke="rgba(216,77,26,0.4)" strokeWidth="1" />
        </g>

        {/* Angle arc */}
        <g className="animate-fade-pulse-delayed">
          <path d="M 15% 85% L 15% 70% L 25% 85% Z" fill="none" stroke="rgba(216,77,26,0.3)" strokeWidth="1" />
          <path d="M 15% 80% A 5 5 0 0 1 20% 85%" fill="none" stroke="rgba(216,77,26,0.35)" strokeWidth="1" />
        </g>

        {/* Room outline */}
        <g className="animate-fade-pulse">
          <rect x="70%" y="70%" width="15%" height="12%" fill="none" stroke="rgba(216,77,26,0.25)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="70%" y1="70%" x2="85%" y2="82%" stroke="rgba(216,77,26,0.15)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}
