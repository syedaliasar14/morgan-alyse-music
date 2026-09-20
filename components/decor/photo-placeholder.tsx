import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  label: string;
  hint?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Dashed-border stand-in for a real photo. Tells the client exactly what
 * image to drop in until real assets are supplied.
 */
export function PhotoPlaceholder({
  label,
  hint,
  aspect = "square",
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-brick/40 bg-white/70 p-6 text-center",
        aspectClasses[aspect],
        className
      )}
    >
      <ImageIcon className="h-8 w-8 text-brick/50" strokeWidth={1.5} />
      <p className="font-display text-sm font-semibold text-brick/80">{label}</p>
      {hint ? (
        <p className="max-w-[22ch] text-xs text-ink/50">{hint}</p>
      ) : null}
    </div>
  );
}
