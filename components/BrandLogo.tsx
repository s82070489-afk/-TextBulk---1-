import { APP_NAME, APP_NAME_EN, APP_TAGLINE } from "@/lib/brand";

interface BrandLogoProps {
  showTagline?: boolean;
  size?: "sm" | "md";
}

export default function BrandLogo({
  showTagline = true,
  size = "md",
}: BrandLogoProps) {
  const titleSize = size === "sm" ? "text-[14px]" : "text-[15px]";

  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark" aria-hidden="true">
        TB
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className={`${titleSize} font-semibold tracking-tight text-zinc-900`}>
            {APP_NAME}
          </span>
          <span className="text-[11px] font-medium tracking-widest text-accent-600">
            {APP_NAME_EN}
          </span>
        </div>
        {showTagline && (
          <p className="mt-0.5 text-xs tracking-wide text-zinc-500">
            {APP_TAGLINE}
          </p>
        )}
      </div>
    </div>
  );
}
