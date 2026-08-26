interface SmileIconProps {
  className?: string;
}

export default function SmileIcon({
  className = "h-8 w-8",
}: SmileIconProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#FFC84D] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-[62%] w-[62%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="12" r="1.4" fill="#075C58" />
        <circle cx="21" cy="12" r="1.4" fill="#075C58" />

        <path
          d="M9.5 18C11.4 20.5 13.5 21.7 16 21.7C18.5 21.7 20.7 20.5 22.5 18"
          stroke="#075C58"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}