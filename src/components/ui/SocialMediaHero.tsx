"use client";

export function SocialMediaHero() {
  return (
    <div className="relative w-full aspect-square max-w-[500px]">
      {/* Ambient glow behind everything */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 drop-shadow-[0_0_60px_rgba(124,58,237,0.35)]"
      >
        <defs>
          {/* Glow filters */}
          <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="phone-shadow" x="-20%" y="-10%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="20" floodColor="#7C3AED" floodOpacity="0.3" />
          </filter>

          {/* Gradients */}
          <linearGradient id="phone-grad" x1="200" y1="120" x2="300" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a1f35" />
            <stop offset="1" stopColor="#0d1020" />
          </linearGradient>
          <linearGradient id="screen-grad" x1="215" y1="145" x2="285" y2="370" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#06B6D4" stopOpacity="0.08" />
            <stop offset="1" stopColor="#22C55E" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="ring-grad" x1="250" y1="250" x2="250" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#06B6D4" stopOpacity="0.3" />
            <stop offset="1" stopColor="#22C55E" stopOpacity="0.1" />
          </linearGradient>

          {/* Orbital paths */}
          <ellipse id="orbit-1" cx="250" cy="260" rx="210" ry="160" fill="none" stroke="url(#ring-grad)" strokeWidth="0.5" strokeDasharray="4 6" />
          <ellipse id="orbit-2" cx="250" cy="260" rx="180" ry="130" fill="none" stroke="url(#ring-grad)" strokeWidth="0.5" strokeDasharray="3 8" />
          <ellipse id="orbit-3" cx="250" cy="260" rx="230" ry="180" fill="none" stroke="url(#ring-grad)" strokeWidth="0.4" strokeDasharray="2 10" />
        </defs>

        {/* Orbit rings */}
        <use href="#orbit-1" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from="0 250 260" to="360 250 260" dur="60s" repeatCount="indefinite" />
        </use>
        <use href="#orbit-2" opacity="0.4">
          <animateTransform attributeName="transform" type="rotate" from="360 250 260" to="0 250 260" dur="45s" repeatCount="indefinite" />
        </use>
        <use href="#orbit-3" opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from="0 250 260" to="360 250 260" dur="80s" repeatCount="indefinite" />
        </use>

        {/* ========== PHONE MOCKUP (center) ========== */}
        <g filter="url(#phone-shadow)">
          {/* Phone body */}
          <rect x="205" y="130" width="90" height="260" rx="18" fill="url(#phone-grad)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          {/* Screen */}
          <rect x="212" y="148" width="76" height="224" rx="10" fill="url(#screen-grad)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          {/* Notch */}
          <rect x="235" y="134" width="30" height="6" rx="3" fill="rgba(255,255,255,0.08)" />
          {/* Home indicator */}
          <rect x="237" y="368" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />

          {/* Screen content - mini dashboard */}
          <rect x="218" y="160" width="40" height="4" rx="2" fill="#7C3AED" opacity="0.6" />
          <rect x="218" y="170" width="64" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
          <rect x="218" y="178" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />

          {/* Mini stat cards */}
          <rect x="218" y="190" width="30" height="24" rx="4" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.2)" strokeWidth="0.5" />
          <rect x="254" y="190" width="30" height="24" rx="4" fill="rgba(6,182,212,0.12)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" />

          {/* Mini bars chart */}
          <rect x="220" y="230" width="5" height="18" rx="1.5" fill="#7C3AED" opacity="0.5" />
          <rect x="228" y="224" width="5" height="24" rx="1.5" fill="#06B6D4" opacity="0.5" />
          <rect x="236" y="228" width="5" height="20" rx="1.5" fill="#22C55E" opacity="0.4" />
          <rect x="244" y="220" width="5" height="28" rx="1.5" fill="#7C3AED" opacity="0.6" />
          <rect x="252" y="226" width="5" height="22" rx="1.5" fill="#06B6D4" opacity="0.4" />
          <rect x="260" y="218" width="5" height="30" rx="1.5" fill="#F97316" opacity="0.5" />

          {/* Mini list items */}
          <rect x="218" y="264" width="48" height="2.5" rx="1" fill="rgba(255,255,255,0.08)" />
          <rect x="218" y="272" width="40" height="2.5" rx="1" fill="rgba(255,255,255,0.06)" />
          <rect x="218" y="280" width="55" height="2.5" rx="1" fill="rgba(255,255,255,0.05)" />

          {/* Mini circle avatars */}
          <circle cx="225" cy="300" r="6" fill="rgba(124,58,237,0.3)" />
          <circle cx="240" cy="300" r="6" fill="rgba(6,182,212,0.3)" />
          <circle cx="255" cy="300" r="6" fill="rgba(34,197,94,0.3)" />
          <circle cx="270" cy="300" r="6" fill="rgba(249,115,22,0.3)" />

          {/* CTA button on screen */}
          <rect x="222" y="320" width="56" height="16" rx="8" fill="#7C3AED" opacity="0.7" />
          <rect x="237" y="325" width="26" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        </g>

        {/* ========== FLOATING SOCIAL MEDIA ICONS ========== */}

        {/* Instagram - top left */}
        <g className="social-icon-float" style={{ animationDelay: "0s" }}>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="3s" repeatCount="indefinite" />
          <circle cx="105" cy="140" r="26" fill="#1a1025" stroke="#E1306C" strokeWidth="1.5" filter="url(#glow-soft)" />
          <g transform="translate(85, 120)">
            <rect x="2" y="2" width="36" height="36" rx="10" fill="none" stroke="#E1306C" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="9" fill="none" stroke="#E1306C" strokeWidth="2.5" />
            <circle cx="32" cy="8" r="3" fill="#E1306C" />
          </g>
          <text x="105" y="178" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Instagram</text>
        </g>

        {/* TikTok - top right */}
        <g className="social-icon-float" style={{ animationDelay: "0.5s" }}>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3.5s" repeatCount="indefinite" />
          <circle cx="395" cy="130" r="26" fill="#121218" stroke="#ffffff" strokeWidth="1.5" filter="url(#glow-soft)" />
          <g transform="translate(375, 110)">
            <path d="M28 8C28 8 28 28 28 30C28 36 23 40 17 40C11 40 6 36 6 30C6 24 11 20 17 20V28C15 28 14 29 14 30C14 33 16 35 19 35C22 35 24 33 24 30V4H30C30 8 32 12 36 14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 4H32V10" fill="none" stroke="#25F4EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
            <path d="M24 6H30V12" fill="none" stroke="#FE2C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </g>
          <text x="395" y="168" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">TikTok</text>
        </g>

        {/* YouTube - bottom left */}
        <g className="social-icon-float" style={{ animationDelay: "1s" }}>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="4s" repeatCount="indefinite" />
          <circle cx="90" cy="360" r="26" fill="#1a0a0a" stroke="#FF0000" strokeWidth="1.5" filter="url(#glow-soft)" />
          <g transform="translate(70, 340)">
            <rect x="2" y="6" width="36" height="28" rx="8" fill="#FF0000" />
            <polygon points="17,12 17,28 30,20" fill="white" />
          </g>
          <text x="90" y="398" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">YouTube</text>
        </g>

        {/* Facebook - bottom right */}
        <g className="social-icon-float" style={{ animationDelay: "1.5s" }}>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-9; 0,0" dur="3.2s" repeatCount="indefinite" />
          <circle cx="410" cy="350" r="26" fill="#0a1530" stroke="#1877F2" strokeWidth="1.5" filter="url(#glow-soft)" />
          <g transform="translate(392, 330)">
            <path d="M26 4C32 4 36 8 36 14V36H28V22H32L33 16H28V12C28 10 29 8 32 8H36V2C36 2 33 2 30 2C24 2 20 6 20 12V16H14V22H20V36H10V14C10 8 14 4 20 4" fill="#1877F2" />
          </g>
          <text x="410" y="388" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Facebook</text>
        </g>

        {/* Telegram - left mid */}
        <g className="social-icon-float" style={{ animationDelay: "2s" }}>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="3.8s" repeatCount="indefinite" />
          <circle cx="65" cy="250" r="22" fill="#0a1a2a" stroke="#26A5E4" strokeWidth="1.5" filter="url(#glow-soft)" />
          <g transform="translate(48, 233)">
            <path d="M4 22L32 10L18 34L14 24L24 18L6 28L12 18L4 22Z" fill="#26A5E4" />
            <path d="M14 24L24 18" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </g>
          <text x="65" y="280" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">Telegram</text>
        </g>

        {/* X (Twitter) - right mid */}
        <g className="social-icon-float" style={{ animationDelay: "2.5s" }}>
          <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="3.6s" repeatCount="indefinite" />
          <circle cx="435" cy="245" r="22" fill="#101015" stroke="white" strokeWidth="1.5" filter="url(#glow-soft)" />
          <g transform="translate(420, 230)">
            <path d="M6 4L16 18L6 30H9L18 20L25 30H32L21 15L30 4H27L19 13L13 4H6Z" fill="white" />
          </g>
          <text x="435" y="275" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">X</text>
        </g>

        {/* ========== DECORATIVE PARTICLES ========== */}
        {/* Small dots floating around */}
        <circle cx="150" cy="100" r="2" fill="#7C3AED" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 3,-5; 0,0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="90" r="1.5" fill="#06B6D4" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; -4,3; 0,0" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="440" cy="180" r="2" fill="#22C55E" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 2,4; 0,0" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="310" r="1.5" fill="#F97316" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; -3,-4; 0,0" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="420" r="2" fill="#EC4899" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="410" r="1.5" fill="#7C3AED" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.2s" repeatCount="indefinite" />
        </circle>

        {/* Sparkle lines */}
        <line x1="140" y1="60" x2="148" y2="68" stroke="#7C3AED" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="148" y1="60" x2="140" y2="68" stroke="#7C3AED" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="370" y1="430" x2="378" y2="438" stroke="#06B6D4" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="378" y1="430" x2="370" y2="438" stroke="#06B6D4" strokeWidth="1" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
        </line>

        {/* ========== CONNECTION LINES to phone ========== */}
        <line x1="120" y1="145" x2="210" y2="200" stroke="#E1306C" strokeWidth="0.6" opacity="0.2" strokeDasharray="4 4">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="370" y1="135" x2="295" y2="195" stroke="#ffffff" strokeWidth="0.6" opacity="0.15" strokeDasharray="4 4">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3.5s" repeatCount="indefinite" />
        </line>
        <line x1="110" y1="355" x2="215" y2="310" stroke="#FF0000" strokeWidth="0.6" opacity="0.2" strokeDasharray="4 4">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="385" y1="345" x2="290" y2="305" stroke="#1877F2" strokeWidth="0.6" opacity="0.15" strokeDasharray="4 4">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3.2s" repeatCount="indefinite" />
        </line>
        <line x1="82" y1="250" x2="210" y2="255" stroke="#26A5E4" strokeWidth="0.6" opacity="0.2" strokeDasharray="4 4">
          <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.8s" repeatCount="indefinite" />
        </line>
        <line x1="415" y1="245" x2="295" y2="255" stroke="white" strokeWidth="0.6" opacity="0.15" strokeDasharray="4 4">
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3.6s" repeatCount="indefinite" />
        </line>

      </svg>
    </div>
  );
}
