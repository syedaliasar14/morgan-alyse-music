import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Polaroid } from "@/components/decor/polaroid";

type PhotoTextSectionProps = {
  subtitle?: string;
  title: string;
  imageSrc: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
};

/** Alternating photo + text block used to build out the About page story. */
export function PhotoTextSection({
  subtitle,
  title,
  imageSrc,
  children,
  className,
  align = "left",
}: PhotoTextSectionProps) {
  const photoClassName = cn(
    "mx-auto w-full max-w-xs lg:mx-0 lg:w-[280px] lg:shrink-0",
    align === "right" && "lg:order-2"
  );

  const textClassName = cn("min-w-0 flex-1", align === "right" && "lg:order-1");

  const photo = (
    <div className={photoClassName}>
      <Polaroid caption={" "}>
        <Image src={imageSrc} alt={title} width={300} height={400} />
      </Polaroid>
    </div>
  );

  const text = (
    <div className={textClassName}>
      <span className="font-script text-2xl text-crimson">{subtitle}</span>
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
        "max-w-5xl mx-auto px-5 sm:px-8 flex flex-col gap-10 py-14 sm:py-20 lg:flex-row lg:items-center lg:gap-16",
        className
      )}
    >
      {photo}
      {text}
    </section>
  );
}
