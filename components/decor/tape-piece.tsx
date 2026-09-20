import { cn } from "@/lib/utils";

type TapePieceProps = {
  className?: string;
  color?: "gold" | "crimson" | "cream";
  rotate?: number;
};

/** A washi-tape strip used to decorate scrapbook-style cards and photos. */
export function TapePiece({ className, color = "gold", rotate = -4 }: TapePieceProps) {
  const colorClasses = {
    gold: "bg-gold/70 border-gold",
    crimson: "bg-crimson/40 border-crimson/60",
    cream: "bg-cream/80 border-white",
  }[color];

  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-6 w-20 border-x sm:h-7 sm:w-24",
        "shadow-[0_1px_3px_rgba(0,0,0,0.15)] backdrop-blur-[1px]",
        colorClasses,
        className
      )}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath:
          "polygon(3% 0%, 97% 0%, 100% 20%, 97% 40%, 100% 60%, 97% 80%, 100% 100%, 3% 100%, 0% 80%, 3% 60%, 0% 40%, 3% 20%)",
      }}
    />
  );
}
