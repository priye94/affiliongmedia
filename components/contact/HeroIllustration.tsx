export default function HeroIllustration() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[90px]" />

      <svg
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full max-w-[520px]"
      >
        <defs>
          <linearGradient
            id="grad"
            x1="0"
            x2="1"
            y1="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Circle */}

        <circle
          cx="260"
          cy="260"
          r="190"
          stroke="url(#grad)"
          strokeWidth="2"
          opacity=".3"
        />

        <circle
          cx="260"
          cy="260"
          r="150"
          stroke="url(#grad)"
          strokeWidth="2"
          opacity=".2"
        />

        {/* Laptop */}

        <rect
          x="165"
          y="170"
          width="190"
          height="120"
          rx="12"
          fill="#121826"
          stroke="#22D3EE"
        />

        <rect
          x="182"
          y="186"
          width="156"
          height="88"
          rx="8"
          fill="#0B1120"
        />

        <rect
          x="145"
          y="300"
          width="230"
          height="18"
          rx="8"
          fill="#1E293B"
        />

        {/* Dashboard */}

        <rect
          x="195"
          y="200"
          width="50"
          height="50"
          rx="8"
          fill="#22D3EE"
          opacity=".8"
        />

        <rect
          x="255"
          y="200"
          width="65"
          height="10"
          rx="5"
          fill="#3B82F6"
        />

        <rect
          x="255"
          y="220"
          width="45"
          height="10"
          rx="5"
          fill="#64748B"
        />

        <rect
          x="255"
          y="240"
          width="60"
          height="10"
          rx="5"
          fill="#64748B"
        />

        {/* Floating Icons */}

        <circle
          cx="110"
          cy="170"
          r="22"
          fill="#0F172A"
          stroke="#22D3EE"
        />

        <text
          x="102"
          y="177"
          fill="#22D3EE"
          fontSize="16"
        >
          ✉
        </text>

        <circle
          cx="410"
          cy="140"
          r="24"
          fill="#0F172A"
          stroke="#22D3EE"
        />

        <text
          x="401"
          y="147"
          fill="#22D3EE"
          fontSize="16"
        >
          ☎
        </text>

        <circle
          cx="410"
          cy="350"
          r="22"
          fill="#0F172A"
          stroke="#22D3EE"
        />

        <text
          x="401"
          y="357"
          fill="#22D3EE"
          fontSize="16"
        >
          ✓
        </text>

      </svg>

    </div>
  );
}