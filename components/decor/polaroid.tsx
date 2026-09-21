import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TapePiece } from "@/components/decor/tape-piece";

type PolaroidProps = {
  children: ReactNode;
  caption?: string;
  rotate?: number;
  className?: string;
};

/** Wraps a photo (or placeholder) in a white polaroid-style frame with tape. */
export function Polaroid({ children, caption, rotate = -3, className }: PolaroidProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-sm bg-white p-3 pb-6 shadow-[0_8px_20px_rgba(36,20,17,0.18)]",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <TapePiece
        className="-top-3 left-1/2 -translate-x-1/2"
        rotate={rotate < 0 ? 6 : -6}
        color="gold"
      />
      {children}
      {caption ? (
        <p className="mt-3 text-center font-handwriting text-xl text-ink">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
