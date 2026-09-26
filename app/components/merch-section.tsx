import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";

const MERCH_ITEMS = [
  { image: "merch1.png", name: "Worcester's Sweetheart T-shirt" },
  { image: "merch2.png", name: "Grow Together T-shirt" },
  { image: "merch3.png", name: "Worcester's Sweetheart Tote Bag" },
];

export function MerchSection({
  homePage,
  bandcampMerchUrl,
}: {
  homePage: HOME_PAGE_QUERY_RESULT;
  bandcampMerchUrl?: string | null;
}) {
  const merch = homePage?.merch;

  return (
    <section className="dotted-hearts-bg bg-cream" id="merch">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          
          <h2 className="mt-1 mb-2 font-display text-3xl font-bold italic text-brick sm:text-4xl">
            {merch?.title || "Merch & Digital Tracks"}
          </h2>
          <Link href={bandcampMerchUrl ?? "#"} className="font-script text-2xl text-ink" target="_blank" rel="noopener noreferrer">
            {merch?.description || "Full collection available on Bandcamp"} <ExternalLink className="ml-2 inline-block" size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {MERCH_ITEMS.map((item, i) => {
            const image = (
              <Image
                src={`/merch/${item.image}`}
                alt={item.name}
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            );
            const className = "bg-white p-3 pb-5 shadow-[0_8px_20px_rgba(36,20,17,0.15)] hover:scale-102 transition duration-300";
            const style = { transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` };

            return bandcampMerchUrl ? (
              <Link
                key={item.name}
                href={bandcampMerchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
              >
                {image}
              </Link>
            ) : (
              <div key={item.name} className={className} style={style}>
                {image}
              </div>
            );
          })}
        </div>

        {bandcampMerchUrl && (
          <div className="mt-10 flex flex-col items-center justify-center gap-8 text-center md:flex-row">
            <Link
              href={bandcampMerchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-max"
            >
              {merch?.buttonText || "Shop Merch & Music"}
              <ExternalLink className="ml-2 inline-block" size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
