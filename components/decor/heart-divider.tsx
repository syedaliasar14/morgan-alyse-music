import { cn } from "@/lib/utils";

/** A row of small heart doodles used to separate sections, scrapbook-style. */
export function HeartDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 text-crimson/70",
        className
      )}
      aria-hidden
    >
      <span className="h-px w-10 bg-brick/30 sm:w-20" />
      <span className="text-lg leading-none">♥</span>
      <span className="text-2xl leading-none text-gold">♥</span>
      <span className="text-lg leading-none">♥</span>
      <span className="h-px w-10 bg-brick/30 sm:w-20" />
    </div>
  );
}
