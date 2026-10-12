export function HeroArt({
  label,
  caption,
}: {
  label: string;
  caption: string;
}) {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-cross cross-one">+</div>
      <div className="art-cross cross-two">+</div>
      <div className="art-index">LK / 001</div>
      <svg viewBox="0 0 560 520" fill="none" className="core-art">
        <defs>
          <linearGradient
            id="edge"
            x1="140"
            y1="90"
            x2="430"
            y2="410"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#a0b8a7" />
            <stop offset=".48" stopColor="#2b6450" />
            <stop offset="1" stopColor="#0b382b" />
          </linearGradient>
          <linearGradient
            id="face"
            x1="280"
            y1="100"
            x2="280"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e5ece3" />
            <stop offset="1" stopColor="#789982" />
          </linearGradient>
          <filter id="shadow">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <ellipse
          cx="284"
          cy="436"
          rx="146"
          ry="20"
          fill="#143d2c"
          opacity=".14"
          filter="url(#shadow)"
        />
        <path
          d="M280 20v460M30 260h500M83 146l394 228M83 374l394-228"
          stroke="#ccd6ca"
          strokeDasharray="3 7"
        />
        <ellipse cx="280" cy="264" rx="232" ry="137" stroke="#c7d2c5" />
        <ellipse cx="280" cy="264" rx="194" ry="112" stroke="#d9e0d5" />
        <g className="core-float">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i} transform={`translate(0 ${i * 21})`}>
              <path
                d="m280 77 150 87v15l-150 87-150-87v-15L280 77Z"
                fill="url(#edge)"
              />
              <path
                d="m280 77 150 87-150 87-150-87 150-87Zm0 38-85 49 85 49 85-49-85-49Z"
                fill="url(#face)"
                fillRule="evenodd"
                stroke="#f4f6ed"
                strokeOpacity=".65"
              />
              <path
                d="m195 164 85 49 85-49v15l-85 49-85-49v-15Z"
                fill="#123f30"
              />
              <path
                d="m130 164 150 87 150-87"
                stroke="#dae5d4"
                strokeWidth="1.4"
              />
            </g>
          ))}
          <path
            d="m280 137 32 18.5v36L280 210l-32-18.5v-36l32-18.5Z"
            fill="#b7df85"
            stroke="#def2b9"
          />
          <path d="m248 155.5 32 18.5 32-18.5M280 174v36" stroke="#5c8c50" />
        </g>
        <circle cx="78" cy="330" r="5" fill="#4e7c5d" />
        <circle cx="459" cy="177" r="5" fill="#b2ca9c" />
      </svg>
      <div className="art-label">
        <span className="status-dot" />
        {label}
      </div>
      <p className="art-caption">{caption}</p>
    </div>
  );
}
