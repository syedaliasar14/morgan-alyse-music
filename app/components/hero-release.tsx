import Link from "next/link";
import { PhotoPlaceholder } from "@/components/decor/photo-placeholder";
import { TapePiece } from "@/components/decor/tape-piece";

export function HeroRelease() {
  return (
    <section className="dotted-hearts-bg relative overflow-hidden border-b-2 border-brick/15 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <span className="font-script text-2xl text-crimson">new single, out now</span>
          <h1 className="mt-2 font-display text-4xl font-bold italic leading-tight text-brick sm:text-6xl">
            Title
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#spotify" className="btn-primary">
              Listen Now
            </Link>
            <Link href="#events" className="btn-outline">
              See Events
            </Link>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <TapePiece className="-top-4 -left-4 z-10" color="crimson" rotate={-8} />
          <TapePiece className="-bottom-4 -right-4 z-10" color="gold" rotate={10} />
          <div className="aspect-square rounded bg-white shadow-[0_12px_30px_rgba(36,20,17,0.25)] rotate-3 hover:rotate-1 transition-transform duration-300 hover:scale-105">
            <div className="aspect-square w-full bg-cream" />
          </div>
        </div>
      </div>
    </section>
  );
}
