import Link from "next/link";
import { Polaroid } from "@/components/decor/polaroid";
import { PhotoPlaceholder } from "@/components/decor/photo-placeholder";
import { HeartDivider } from "@/components/decor/heart-divider";

export function MorganAlyseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <HeartDivider className="mb-12" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
          <div className="mx-auto lg:mx-0">
            <Polaroid caption="xo, Morgan">
              <PhotoPlaceholder
                label="Portrait Photo"
                hint="Candid or studio portrait of Morgan Alyse, warm film-style tones"
                aspect="portrait"
              />
            </Polaroid>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold italic text-brick sm:text-4xl">
              Morgan Alyse
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
              Part singer-songwriter, part scrapbook keeper, Morgan Alyse
              writes songs like love letters — pressed flowers, torn ticket
              stubs, and handwritten notes turned into melody. Drawing from
              vintage pop and bedroom-folk, her music feels like flipping
              through an old photo album you didn&apos;t know you missed.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-script text-2xl text-crimson underline decoration-gold decoration-2 underline-offset-4 hover:text-brick"
            >
              read her story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
