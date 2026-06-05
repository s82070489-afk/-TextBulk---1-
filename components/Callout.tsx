interface CalloutProps {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "example" | "tip";
}

const variantStyles = {
  default: "border-accent-200/80 bg-accent-50/50",
  example: "border-zinc-300/80 bg-zinc-50",
  tip: "border-accent-100 bg-white",
};

export default function Callout({
  title,
  children,
  variant = "default",
}: CalloutProps) {
  return (
    <aside
      className={`relative my-8 overflow-hidden rounded-xl border py-5 pl-6 pr-6 ${variantStyles[variant]}`}
    >
      <div
        className="absolute left-0 top-0 h-full w-1 bg-accent-400"
        aria-hidden="true"
      />
      {title && (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-accent-700">
          {title}
        </p>
      )}
      <div className="text-[15px] leading-[1.85] tracking-wide text-zinc-600">
        {children}
      </div>
    </aside>
  );
}
