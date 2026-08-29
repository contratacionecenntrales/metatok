export function RobotIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 360" className={className} aria-hidden>
      <defs>
        <linearGradient id="robot-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eeecfb" />
        </linearGradient>
        <linearGradient id="robot-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#241f3d" />
          <stop offset="100%" stopColor="#4c3d8f" />
        </linearGradient>
        <radialGradient id="robot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c3b3ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c3b3ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="robot-eye" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c5cff" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="336" rx="95" ry="14" fill="#4c3d8f" opacity="0.08" />
      <circle cx="160" cy="180" r="150" fill="url(#robot-glow)" />

      {/* antenna */}
      <line x1="160" y1="40" x2="160" y2="14" stroke="#c7bdf5" strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="10" r="9" fill="url(#robot-eye)" />

      {/* ears */}
      <rect x="60" y="120" width="22" height="56" rx="11" fill="url(#robot-body)" stroke="#e3ddf9" />
      <rect x="238" y="120" width="22" height="56" rx="11" fill="url(#robot-body)" stroke="#e3ddf9" />

      {/* head */}
      <rect x="82" y="46" width="156" height="130" rx="42" fill="url(#robot-body)" stroke="#e3ddf9" strokeWidth="2" />

      {/* visor */}
      <rect x="106" y="94" width="108" height="48" rx="24" fill="url(#robot-visor)" />
      <rect x="122" y="110" width="26" height="16" rx="8" fill="url(#robot-eye)" />
      <rect x="172" y="110" width="26" height="16" rx="8" fill="url(#robot-eye)" />

      {/* torso */}
      <rect x="70" y="188" width="180" height="140" rx="38" fill="url(#robot-body)" stroke="#e3ddf9" strokeWidth="2" />
      <circle cx="160" cy="240" r="28" fill="#f4f1ff" stroke="#d9cffb" strokeWidth="2" />
      <path
        d="M148 246c0-8 6-14 14-14s14 6 14 14"
        stroke="#7c5cff"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="160" cy="228" r="4.5" fill="#7c5cff" />

      <rect x="92" y="282" width="60" height="10" rx="5" fill="#e7e1fb" />
      <rect x="168" y="282" width="60" height="10" rx="5" fill="#e7e1fb" />
    </svg>
  );
}
