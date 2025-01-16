<script lang="ts">
  const { hide }: { hide: boolean } = $props();

  let isHovered = $state(false);

  $effect(() => {
    const backBtn = document.querySelector(".backBtn")!;
    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    backBtn.addEventListener("mouseenter", handleMouseEnter);
    backBtn.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      backBtn.removeEventListener("mouseenter", handleMouseEnter);
      backBtn.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
</script>

<div class={`${hide ? "hidden" : "block"} backBtn`}>
  <!-- Mobile -->
  <svg
    width="71"
    height="75"
    viewBox="0 0 71 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="md:hidden"
  >
    <g filter="url(#filter0_d_211_167)">
      <rect x="10" y="14" width="36" height="36" rx="18" fill="#180F05" />
      <rect
        x="9.5"
        y="13.5"
        width="37"
        height="37"
        rx="18.5"
        stroke="url(#paint0_linear_211_167)"
      />
      <rect
        width="22"
        height="22"
        rx="11"
        transform="matrix(-1 0 0 1 39 21)"
        fill="#E3BF00"
      />
      <path d="M31 26L23 32.2222L31 38V26Z" fill="#180F05" />
    </g>
    <defs>
      <filter
        id="filter0_d_211_167"
        x="-7"
        y="-3"
        width="78"
        height="78"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_211_167"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_211_167"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_211_167"
        x1="15.2105"
        y1="19.2105"
        x2="40.3158"
        y2="44.7895"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B2B2B" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>

  <!-- Tablet -->
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="hidden md:block xl:hidden"
  >
    <g filter="url(#filter0_d_265_282)">
      <rect x="17" y="17" width="48" height="48" rx="24" fill="#180F05" />
      <rect
        x="16.5"
        y="16.5"
        width="49"
        height="49"
        rx="24.5"
        stroke="url(#paint0_linear_265_282)"
      />
      <rect
        width="30"
        height="30"
        rx="15"
        transform="matrix(-1 0 0 1 56 26)"
        fill="#E3BF00"
      />
      <path d="M45 32L33 40.8148L45 49V32Z" fill="#180F05" />
    </g>
    <defs>
      <filter
        id="filter0_d_265_282"
        x="0"
        y="0"
        width="90"
        height="90"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_265_282"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_265_282"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_265_282"
        x1="23.9474"
        y1="23.9474"
        x2="57.4211"
        y2="58.0526"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B2B2B" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>
  <!-- Desktop -->
  <div
    class={`p-[1px] ${isHovered ? "bg-[#E3BF00]" : "bg-gradient-to-b from-[#2B2B2B] to-black"} rounded-full shadow-[4px_4px_20px_#000000] hidden xl:block`}
  >
    <div
      class={` ${isHovered ? "bg-[#E3BF00]" : "bg-[#180F05]"} px-5 py-2 flex items-center rounded-full gap-[10px]`}
    >
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="22"
          height="22"
          rx="11"
          transform="matrix(-1 0 0 1 22 0.5)"
          fill={isHovered ? "#180F05" : "#E3BF00"}
        />
        <path
          d="M15.125 5L5.125 11.7407L15.125 18V5Z"
          fill={isHovered ? "#E3BF00" : "#180F05"}
        />
      </svg>

      <p
        class={`uppercase ${isHovered ? "text-[#180F05]" : "text-[#E3BF00]"} font-['Anton'] text-[1.25rem] m-0`}
      >
        Back
      </p>
    </div>
  </div>
</div>
