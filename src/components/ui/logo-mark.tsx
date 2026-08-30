import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "dark" | "light";
  size?: number;
}

export function LogoMark({
  className,
  variant = "dark",
  size = 32,
}: LogoMarkProps) {
  const isLight = variant === "light";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <rect
        width="32"
        height="32"
        rx="7.5"
        fill={isLight ? "#FFFFFF" : "#0B1220"}
        fillOpacity={isLight ? 0.06 : 1}
      />
      <path
        d="M7.5 8H10.9L16 14.2L21.1 8H24.5V22H21.1V13.4L16 19.6L10.9 13.4V22H7.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M7.5 24.8H24.5"
        stroke={isLight ? "#3B82F6" : "#2563EB"}
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}
