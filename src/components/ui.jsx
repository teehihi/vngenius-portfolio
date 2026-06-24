import { cn } from "../lib/utils";

export function Button({ as: Comp = "button", className, variant = "primary", ...props }) {
  return (
    <Comp
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-[6px] px-4 text-sm font-black uppercase tracking-[0.06em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd23f] disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "border-2 border-[#ffd23f] bg-[#f36a22] text-[#180d0a] shadow-[4px_4px_0_#ffd23f] hover:-translate-y-0.5 hover:bg-[#ff7a34]",
        variant === "outline" &&
          "border-2 border-[#f36a22]/75 bg-[#241312] text-[#fff7e8] hover:bg-[#f36a22]/18",
        variant === "ghost" && "text-[#fff7e8] hover:bg-[#f36a22]/18 hover:text-[#ffd23f]",
        className,
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-[8px] border-2 border-[#3b2320] bg-[#201312]/90 shadow-[8px_8px_0_rgba(0,0,0,0.38)]",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({ className, tone = "neutral", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold",
        tone === "orange" && "border-[#f36a22]/50 bg-[#f36a22]/16 text-[#ffb27a]",
        tone === "yellow" && "border-[#ffd23f]/50 bg-[#ffd23f]/15 text-[#ffe78a]",
        tone === "green" && "border-[#47e58f]/40 bg-[#47e58f]/12 text-[#9dffbd]",
        tone === "blue" && "border-[#3ce7ff]/40 bg-[#3ce7ff]/12 text-[#a8f4ff]",
        tone === "cyan" && "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
        tone === "amber" && "border-amber-300/25 bg-amber-300/10 text-amber-100",
        tone === "emerald" && "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
        tone === "violet" && "border-violet-300/25 bg-violet-300/10 text-violet-100",
        tone === "neutral" && "border-white/12 bg-white/6 text-slate-200",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#ffd23f]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-[#fff7e8] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-[#e9d9c5] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="min-w-0 rounded-[6px] border-2 border-[#3b2320] bg-[#160f10] px-4 py-3">
      <p className="text-2xl font-black text-[#fff7e8]">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#bda895]">{label}</p>
    </div>
  );
}
