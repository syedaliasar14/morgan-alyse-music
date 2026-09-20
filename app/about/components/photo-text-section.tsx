import type { ReactNode } from "react";
import { Polaroid } from "@/components/decor/polaroid";
import { PhotoPlaceholder } from "@/components/decor/photo-placeholder";
import { cn } from "@/lib/utils";

type PhotoTextSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  photoLabel: string;
  photoHint: string;
  caption?: string;
  align?: "left" | "right";
};

/** Alternating photo + text block used to build out the About page story. */
export function PhotoTextSection({
  eyebrow,
  title,
  children,
  photoLabel,
  photoHint,
  caption,
  align = "left",
}: PhotoTextSectionProps) {
  const photo = (
    <div className="mx-auto w-full max-w-xs lg:mx-0">
      <Polaroid caption={caption} rotate={align === "left" ? -3 : 3}>
        <PhotoPlaceholder label={photoLabel} hint={photoHint} aspect="portrait" />
      </Polaroid>
    </div>
  );

  const text = (
    <div>
      <span className="font-script text-2xl text-crimson">{eyebrow}</span>
      <h2 className="mt-1 font-display text-3xl font-bold italic text-brick sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 max-w-xl space-y-4 leading-relaxed text-ink/70">
        {children}
      </div>
    </div>
  );

  return (
    <section
      className={cn(
        "grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center lg:gap-16"
      )}
    >
      {align === "left" ? (
        <>
          {photo}
          {text}
        </>
      ) : (
        <>
          <div className="lg:order-2">{photo}</div>
          <div className="lg:order-1">{text}</div>
        </>
      )}
    </section>
  );
}
