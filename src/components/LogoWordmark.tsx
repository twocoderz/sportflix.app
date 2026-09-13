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
  return (
    <img
      aria-hidden="true"
      alt=""
      className={className}
      height={(size * 64) / 186}
      src="/logos/sportflix-64.svg"
      style={style}
      width={size}
    />
  );
}
