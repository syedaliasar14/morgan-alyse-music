import Image from "next/image";
import Link from "next/link";
import { TapePiece } from "@/components/decor/tape-piece";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/queries/home-page";
import { urlFor } from "@/sanity/lib/image";

export async function HeroRelease() {
  const { data: homePage } = await sanityFetch({ query: HOME_PAGE_QUERY });

  const title = homePage?.title ?? "Title";
  const subtitle = homePage?.subtitle;
  const albumImage = homePage?.albumImage;

  return (
    <section className="dotted-hearts-bg relative overflow-hidden border-b-2 border-brick/15 bg-cream">
      <div className="mx-auto relative z-10 grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          {subtitle && (
            <span className="font-script text-2xl text-crimson">{subtitle}</span>
          )}
          <h1 className="mt-2 font-display text-4xl font-bold italic leading-tight text-brick sm:text-6xl">
            {title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#spotify" className="btn-primary">
              Listen Now
            </Link>
            <Link href="#events" className="btn-outline bg-cream hover:bg-crimson">
              See Events
            </Link>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <TapePiece className="-top-4 -left-4 z-10" color="crimson" rotate={-8} />
          <TapePiece className="-bottom-4 -right-4 z-10" color="gold" rotate={10} />
          <div className="aspect-square rounded bg-white shadow-[0_12px_30px_rgba(36,20,17,0.25)] rotate-3 hover:rotate-1 transition-transform duration-300 hover:scale-105">
            {albumImage?.asset ? (
              <Image
                src={urlFor(albumImage).width(600).height(600).url()}
                alt={albumImage.alt || title}
                width={600}
                height={600}
                className="aspect-square w-full rounded object-cover"
                placeholder={albumImage.asset.metadata?.lqip ? "blur" : "empty"}
                blurDataURL={albumImage.asset.metadata?.lqip ?? undefined}
                priority
              />
            ) : (
              <div className="aspect-square w-full bg-cream" />
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-[url('/textures/floral.png')] bg-cover [mask-image:linear-gradient(to_bottom,transparent,black)]" />
    </section>
  );
}

