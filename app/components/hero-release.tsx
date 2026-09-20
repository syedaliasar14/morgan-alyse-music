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
            Paper Hearts
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
            Morgan Alyse&apos;s newest single is a love letter set to sound —
            equal parts torch song and diary entry. Stream it now or catch it
            live on the upcoming tour.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#spotify"
              className="rounded-full bg-crimson px-6 py-3 font-semibold text-white shadow-[0_4px_0_0_#9b3729] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            >
              Listen Now
            </a>
            <Link
              href="/about"
              className="rounded-full border-2 border-brick px-6 py-3 font-semibold text-brick transition-colors hover:bg-brick hover:text-cream"
            >
              Meet Morgan
            </Link>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <TapePiece className="-top-4 -left-4 z-10" color="crimson" rotate={-8} />
          <TapePiece className="-bottom-4 -right-4 z-10" color="gold" rotate={10} />
          <div className="border-4 border-white bg-white p-2 shadow-[0_12px_30px_rgba(36,20,17,0.25)]">
            <PhotoPlaceholder
              label="Single/Album Cover Art"
              hint="Square 1:1 image, vintage red & cream tones, e.g. Morgan holding a paper heart or vintage valentine card collage"
              aspect="square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
