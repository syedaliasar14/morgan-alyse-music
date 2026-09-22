import { PhotoPlaceholder } from "@/components/decor/photo-placeholder";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MERCH_ITEMS = [
  { image: "merch1.png", name: "Worcester's Sweetheart T-shirt" },
  { image: "merch2.png", name: "Grow Together T-shirt" },
  { image: "merch3.png", name: "Worcester's Sweetheart Tote Bag" },
];

const BANDCAMP_MERCH_URL = "https://morganalyse1.bandcamp.com/merch";
const BANDCAMP_MUSIC_URL = "https://morganalyse1.bandcamp.com/music";

export function MerchSection() {
  return (
    <section className="dotted-hearts-bg bg-cream" id="merch">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          
          <h2 className="mt-1 mb-2 font-display text-3xl font-bold italic text-brick sm:text-4xl">
            Merch & Digital Tracks
          </h2>
          <span className="font-script text-2xl text-ink">Full collection available on 
            <Link href={BANDCAMP_MERCH_URL} target="_blank" rel="noopener noreferrer" className="underline ml-1">
              Bandcamp
            </Link>
          </span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {MERCH_ITEMS.map((item, i) => (
            <Link
              key={item.name}
              href={BANDCAMP_MERCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 pb-5 shadow-[0_8px_20px_rgba(36,20,17,0.15)] hover:scale-102 transition duration-300"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <Image
                src={`/merch/${item.image}`}
                alt={item.name}
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8 text-center items-center">
          <Link
            href={BANDCAMP_MERCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-max"
          >
            Shop Merch & Music
            <ExternalLink className="ml-2 inline-block" size={16} /> 
          </Link>
        </div>
      </div>
    </section>
  );
}
