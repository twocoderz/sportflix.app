import type { CSSProperties } from "react";

export type LogoWordmarkProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

export default function LogoWordmark({
  size = 128,
  className,
  style,
}: LogoWordmarkProps) {
  const height = (size * 64) / 186;

  return (
    <span className={`relative inline-block ${className ?? ""}`} style={style}>
      <img
        aria-hidden="true"
        alt=""
        height={height}
        src="/logos/sportflix-64.svg"
        width={size}
      />
      <img
        aria-hidden="true"
        alt=""
        className="pointer-events-none absolute inset-0 hidden dark:block"
        height={height}
        src="/logos/sportflix-64.svg"
        style={{
          clipPath: "inset(0 0 0 34.41%)",
          filter: "invert(1)",
        }}
        width={size}
      />
    </span>
  );
}
