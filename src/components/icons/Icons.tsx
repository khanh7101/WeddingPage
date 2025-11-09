// src/components/icons/Icons.tsx
import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  /** Icon size (px, rem, em, etc.) */
  size?: number | string;
  /** Stroke width (độ dày nét vẽ) */
  strokeWidth?: number;
  /** Tailwind / custom class */
  className?: string;
};

const DEFAULT_ICON_SIZE = 20;
const DEFAULT_STROKE_WIDTH = 1.7;

/**
 * Base SVG cho các icon dạng stroke
 */
function IconBase({
  size = DEFAULT_ICON_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  className = "",
  children,
  ...rest
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

/**
 * 🔹 Icon Facebook
 */
export const IconFacebook: React.FC<IconProps> = ({
  size = DEFAULT_ICON_SIZE,
  className = "",
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    {...rest}
  >
    <path
      // dùng currentColor để Tailwind điều khiển màu (text-white, text-blue-600, ...)
      fill="currentColor"
      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"
    />
  </svg>
);

/**
 * 🔹 Icon Instagram
 */
export const IconInstagram: React.FC<IconProps> = ({
  size = DEFAULT_ICON_SIZE,
  strokeWidth = 2,
  className = "",
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    {...rest}
  >
    <g fill="none">
      <path
        stroke="currentColor"
        strokeWidth={strokeWidth}
        d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"
      />
      <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </g>
  </svg>
);



export default IconFacebook;
