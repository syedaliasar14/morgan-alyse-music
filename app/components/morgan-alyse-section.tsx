import Image from "next/image";
import Link from "next/link";
import { Polaroid } from "@/components/decor/polaroid";
import { HeartDivider } from "@/components/decor/heart-divider";

export function MorganAlyseSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 z-10 relative">
        <HeartDivider className="mb-12" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
          <div className="mx-auto lg:mx-0">
            <Polaroid caption="xo, Morgan">
              <Image
                src="/morgan-alyse.jpg"
                alt="Portrait of Morgan Alyse"
                width={320}
                height={400}
                loading="eager"
              />
            </Polaroid>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold italic text-brick sm:text-4xl">
              Morgan Alyse
            </h2>
            <p className="mt-4 max-w-xl text-ink leading-relaxed">
              Known as "Worcester's Sweetheart", Morgan Alyse is a songwriter and performer, known for her jazzy folk, ukulele-driven sound and soulful original songs. She brings warmth and heart to every performance.
            </p>
            <Link href="/about" className="btn-primary mt-8 flex w-max">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
