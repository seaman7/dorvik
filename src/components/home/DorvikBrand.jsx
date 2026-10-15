export function DorvikBrand({ className = "", light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-bold tracking-tight text-xl sm:text-2xl select-none ${
        light ? "text-white" : "text-[#14382c]"
      } ${className}`}
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
        className={`w-7 h-7 shrink-0 ${light ? "text-[#a3e635]" : "text-[#14382c]"}`}
      >
        <path
          d="M5 5h14c8 0 13 5 13 13S27 31 19 31H5l5-7h9a6 6 0 0 0 0-12H5V5Z"
          fill="currentColor"
        />
        <path d="M5 15h10l-5 7H0l5-7Z" fill={light ? "#ffffff" : "#84cc16"} />
      </svg>
      <span className="font-extrabold tracking-tight">
        dorvik
        <span className="text-[#84cc16]">.</span>
      </span>
    </span>
  );
}
