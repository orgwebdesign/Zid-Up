"use client";

export function SocialMediaHero() {
  return (
    <div className="relative w-full aspect-[5/6] max-w-[480px]">
      {/* Ambient glow behind everything */}
      <div className="absolute inset-0 bg-[#22C55E]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "4s" }} />

      <svg
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 drop-shadow-[0_0_40px_rgba(34,197,94,0.15)]"
      >
        <defs>
          {/* ===== FILTERS ===== */}
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="coin-shadow" x="-30%" y="-20%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
          </filter>
          <filter id="smoke-blur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="smoke-blur-sm">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* ===== GRADIENTS ===== */}
          {/* Cylinder body gradient (green pipe) */}
          <linearGradient id="cyl-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4ADE80" />
            <stop offset="0.3" stopColor="#22C55E" />
            <stop offset="0.7" stopColor="#16A34A" />
            <stop offset="1" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="cyl-body-reverse" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#4ADE80" />
            <stop offset="0.3" stopColor="#22C55E" />
            <stop offset="0.7" stopColor="#16A34A" />
            <stop offset="1" stopColor="#15803D" />
          </linearGradient>
          {/* Cylinder top ellipse */}
          <linearGradient id="cyl-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#86EFAC" />
            <stop offset="1" stopColor="#4ADE80" />
          </linearGradient>
          {/* Cylinder bottom ellipse */}
          <linearGradient id="cyl-bottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#22C55E" />
            <stop offset="1" stopColor="#15803D" />
          </linearGradient>
          {/* Inner glow of pipe opening */}
          <radialGradient id="pipe-glow" cx="50%" cy="50%">
            <stop offset="0" stopColor="#86EFAC" stopOpacity="0.6" />
            <stop offset="0.6" stopColor="#22C55E" stopOpacity="0.2" />
            <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
          </radialGradient>

          {/* Coin gradients per platform */}
          <linearGradient id="coin-ig" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F58529" />
            <stop offset="0.3" stopColor="#DD2A7B" />
            <stop offset="0.7" stopColor="#8134AF" />
            <stop offset="1" stopColor="#515BD4" />
          </linearGradient>
          <linearGradient id="coin-yt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF0000" />
            <stop offset="1" stopColor="#CC0000" />
          </linearGradient>
          <linearGradient id="coin-wa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#25D366" />
            <stop offset="1" stopColor="#128C7E" />
          </linearGradient>
          <linearGradient id="coin-li" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0A66C2" />
            <stop offset="1" stopColor="#004182" />
          </linearGradient>
          <linearGradient id="coin-spotify" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1ED760" />
            <stop offset="1" stopColor="#158F3C" />
          </linearGradient>
          <linearGradient id="coin-twitch" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9146FF" />
            <stop offset="1" stopColor="#6441A5" />
          </linearGradient>
          <linearGradient id="coin-soundcloud" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF5500" />
            <stop offset="1" stopColor="#FF8800" />
          </linearGradient>
          <linearGradient id="coin-kick" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#53F32B" />
            <stop offset="1" stopColor="#2CC610" />
          </linearGradient>

          {/* Coin edge (3D depth) */}
          <linearGradient id="coin-edge-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(0,0,0,0.3)" />
            <stop offset="1" stopColor="rgba(0,0,0,0.6)" />
          </linearGradient>

          {/* Highlight shimmer */}
          <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ========== TOP CYLINDER (opening) ========== */}
        <g>
          {/* Smoke / clouds coming out of top pipe */}
          <g opacity="0.5">
            <circle cx="230" cy="115" r="28" fill="#86EFAC" filter="url(#smoke-blur)">
              <animate attributeName="cy" values="115;90;115" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.15;0.4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="105" r="22" fill="#bbf7d0" filter="url(#smoke-blur)">
              <animate attributeName="cy" values="105;75;105" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0.1;0.35" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="95" r="32" fill="#86EFAC" filter="url(#smoke-blur)">
              <animate attributeName="cy" values="95;60;95" dur="5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.08;0.3" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="210" cy="100" r="18" fill="#d9f99d" filter="url(#smoke-blur-sm)">
              <animate attributeName="cy" values="100;70;100" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="290" cy="108" r="20" fill="#bbf7d0" filter="url(#smoke-blur-sm)">
              <animate attributeName="cy" values="108;78;108" dur="4.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0.08;0.25" dur="4.2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Cylinder body */}
          <rect x="180" y="120" width="140" height="50" fill="url(#cyl-body)" />
          {/* Left edge curve */}
          <ellipse cx="180" cy="145" rx="0" ry="25" fill="rgba(0,0,0,0.15)" />

          {/* Top ellipse (opening face) */}
          <ellipse cx="250" cy="120" rx="70" ry="25" fill="url(#cyl-top)" />
          {/* Inner glow */}
          <ellipse cx="250" cy="120" rx="60" ry="20" fill="url(#pipe-glow)" />
          {/* Rim highlight */}
          <ellipse cx="250" cy="120" rx="70" ry="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

          {/* Bottom ellipse (hidden, gives depth) */}
          <ellipse cx="250" cy="170" rx="70" ry="25" fill="url(#cyl-bottom)" />
          {/* Body side connections */}
          <path d="M180,120 L180,170" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          <path d="M320,120 L320,170" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
        </g>

        {/* ========== SOCIAL MEDIA 3D COINS (falling) ========== */}

        {/* Instagram coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; 5,8; 0,0" dur="3.2s" repeatCount="indefinite" />
          {/* Coin edge (3D depth) */}
          <ellipse cx="115" cy="252" rx="28" ry="10" fill="#515BD4" opacity="0.6" />
          <rect x="87" y="242" width="56" height="10" fill="#515BD4" opacity="0.4" />
          {/* Coin face */}
          <ellipse cx="115" cy="238" rx="28" ry="28" fill="url(#coin-ig)" />
          <ellipse cx="115" cy="238" rx="28" ry="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          {/* Shimmer */}
          <ellipse cx="105" cy="228" rx="14" ry="14" fill="url(#shimmer)" opacity="0.5" />
          {/* IG camera icon */}
          <rect x="101" y="224" width="28" height="28" rx="8" fill="none" stroke="white" strokeWidth="2.5" />
          <circle cx="115" cy="238" r="8" fill="none" stroke="white" strokeWidth="2.5" />
          <circle cx="126" cy="228" r="2.5" fill="white" />
        </g>

        {/* YouTube coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; -4,10; 0,0" dur="3.8s" repeatCount="indefinite" />
          <ellipse cx="370" cy="232" rx="26" ry="9" fill="#CC0000" opacity="0.6" />
          <rect x="344" y="223" width="52" height="9" fill="#CC0000" opacity="0.4" />
          <ellipse cx="370" cy="218" rx="26" ry="26" fill="url(#coin-yt)" />
          <ellipse cx="370" cy="218" rx="26" ry="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="361" cy="209" rx="13" ry="13" fill="url(#shimmer)" opacity="0.5" />
          {/* Play triangle */}
          <polygon points="362,209 362,227 380,218" fill="white" />
        </g>

        {/* WhatsApp coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; 6,6; 0,0" dur="4.1s" repeatCount="indefinite" />
          <ellipse cx="165" cy="345" rx="24" ry="8.5" fill="#128C7E" opacity="0.6" />
          <rect x="141" y="336.5" width="48" height="8.5" fill="#128C7E" opacity="0.4" />
          <ellipse cx="165" cy="328" rx="24" ry="24" fill="url(#coin-wa)" />
          <ellipse cx="165" cy="328" rx="24" ry="24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="157" cy="320" rx="12" ry="12" fill="url(#shimmer)" opacity="0.5" />
          {/* Phone icon */}
          <path d="M157,320 C157,316 160,314 163,314 L167,314 C170,314 173,316 173,320 L173,336 C173,340 170,342 167,342 L163,342 C160,342 157,340 157,336 Z" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="165" cy="335" r="1.5" fill="white" />
        </g>

        {/* LinkedIn coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; -5,7; 0,0" dur="3.5s" repeatCount="indefinite" />
          <ellipse cx="340" cy="340" rx="25" ry="9" fill="#004182" opacity="0.6" />
          <rect x="315" y="331" width="50" height="9" fill="#004182" opacity="0.4" />
          <ellipse cx="340" cy="322" rx="25" ry="25" fill="url(#coin-li)" />
          <ellipse cx="340" cy="322" rx="25" ry="25" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="332" cy="314" rx="12.5" ry="12.5" fill="url(#shimmer)" opacity="0.5" />
          {/* in logo */}
          <rect x="330" y="316" width="4" height="14" rx="1" fill="white" />
          <circle cx="332" cy="312" r="2.5" fill="white" />
          <rect x="337" y="316" width="10" height="2" rx="1" fill="white" />
          <path d="M337,322 L337,330" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Spotify coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; 4,9; 0,0" dur="4.4s" repeatCount="indefinite" />
          <ellipse cx="130" cy="448" rx="22" ry="8" fill="#158F3C" opacity="0.6" />
          <rect x="108" y="440" width="44" height="8" fill="#158F3C" opacity="0.4" />
          <ellipse cx="130" cy="428" rx="22" ry="22" fill="url(#coin-spotify)" />
          <ellipse cx="130" cy="428" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="123" cy="421" rx="11" ry="11" fill="url(#shimmer)" opacity="0.5" />
          {/* Sound waves */}
          <path d="M120,424 Q130,418 140,424" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M122,430 Q130,425 138,430" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M124,435 Q130,431 136,435" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Twitch coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; -3,8; 0,0" dur="3.7s" repeatCount="indefinite" />
          <ellipse cx="390" cy="430" rx="23" ry="8" fill="#6441A5" opacity="0.6" />
          <rect x="367" y="422" width="46" height="8" fill="#6441A5" opacity="0.4" />
          <ellipse cx="390" cy="412" rx="23" ry="23" fill="url(#coin-twitch)" />
          <ellipse cx="390" cy="412" rx="23" ry="23" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="383" cy="405" rx="11.5" ry="11.5" fill="url(#shimmer)" opacity="0.5" />
          {/* Twitch logo - speech bubble */}
          <path d="M382,404 L382,418 L386,418 L390,422 L390,418 L400,418 L400,408 L382,408 Z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <rect x="386" y="410" width="3" height="5" rx="1.5" fill="white" />
          <rect x="392" y="410" width="3" height="5" rx="1.5" fill="white" />
        </g>

        {/* SoundCloud coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; 5,5; 0,0" dur="4s" repeatCount="indefinite" />
          <ellipse cx="260" cy="380" rx="21" ry="7.5" fill="#CC4400" opacity="0.6" />
          <rect x="239" y="372.5" width="42" height="7.5" fill="#CC4400" opacity="0.4" />
          <ellipse cx="260" cy="360" rx="21" ry="21" fill="url(#coin-soundcloud)" />
          <ellipse cx="260" cy="360" rx="21" ry="21" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="253" cy="353" rx="10.5" ry="10.5" fill="url(#shimmer)" opacity="0.5" />
          {/* Cloud shape */}
          <path d="M248,358 Q248,352 254,352 Q254,346 260,348 Q264,346 268,350 Q274,350 274,356 Q276,356 276,360 Q276,364 272,364 L250,364 Q246,364 246,360 Q246,358 248,358 Z" fill="white" />
        </g>

        {/* Kick coin */}
        <g filter="url(#coin-shadow)">
          <animateTransform attributeName="transform" type="translate" values="0,0; -6,6; 0,0" dur="3.4s" repeatCount="indefinite" />
          <ellipse cx="210" cy="280" rx="20" ry="7" fill="#1F9B0D" opacity="0.6" />
          <rect x="190" y="273" width="40" height="7" fill="#1F9B0D" opacity="0.4" />
          <ellipse cx="210" cy="260" rx="20" ry="20" fill="url(#coin-kick)" />
          <ellipse cx="210" cy="260" rx="20" ry="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <ellipse cx="203" cy="253" rx="10" ry="10" fill="url(#shimmer)" opacity="0.5" />
          {/* K letter */}
          <path d="M205,252 L205,270 M205,260 L215,252 M205,260 L215,270" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* ========== BOTTOM CYLINDER (receiving) ========== */}
        <g>
          {/* Top ellipse (opening) */}
          <ellipse cx="250" cy="490" rx="70" ry="25" fill="url(#cyl-top)" />
          <ellipse cx="250" cy="490" rx="60" ry="20" fill="url(#pipe-glow)" />
          <ellipse cx="250" cy="490" rx="70" ry="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

          {/* Cylinder body */}
          <rect x="180" y="490" width="140" height="50" fill="url(#cyl-body-reverse)" />

          {/* Bottom ellipse (base) */}
          <ellipse cx="250" cy="540" rx="70" ry="25" fill="url(#cyl-bottom)" />

          {/* Rim highlight */}
          <ellipse cx="250" cy="490" rx="70" ry="25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </g>

        {/* ========== DECORATIVE PARTICLES ========== */}
        <circle cx="100" cy="180" r="2.5" fill="#22C55E" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; 3,-5; 0,0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="410" cy="170" r="2" fill="#86EFAC" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0; -4,3; 0,0" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="380" r="2" fill="#4ADE80" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="430" cy="300" r="2.5" fill="#bbf7d0" opacity="0.35">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Tiny sparkle crosses */}
        <g opacity="0.3">
          <line x1="75" y1="155" x2="82" y2="162" stroke="#86EFAC" strokeWidth="1" />
          <line x1="82" y1="155" x2="75" y2="162" stroke="#86EFAC" strokeWidth="1" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </g>
        <g opacity="0.25">
          <line x1="425" y1="455" x2="432" y2="462" stroke="#4ADE80" strokeWidth="1" />
          <line x1="432" y1="455" x2="425" y2="462" stroke="#4ADE80" strokeWidth="1" />
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="2.5s" repeatCount="indefinite" />
        </g>

      </svg>
    </div>
  );
}
