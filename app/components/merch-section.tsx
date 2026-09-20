import { PhotoPlaceholder } from "@/components/decor/photo-placeholder";
import { ExternalLink } from "lucide-react";

const MERCH_ITEMS = [
  { name: "Paper Hearts Tee", price: "$28" },
  { name: "Vintage Valentine Tote", price: "$22" },
  { name: "Scrapbook Zine", price: "$15" },
];

// Replace with Morgan Alyse's real Bandcamp merch storefront URL.
const BANDCAMP_MERCH_URL = "https://morganalyse.bandcamp.com/merch";

export function MerchSection() {
  return (
    <section className="dotted-hearts-bg bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          <span className="font-script text-2xl text-crimson">take it home</span>
          <h2 className="mt-1 font-display text-3xl font-bold italic text-brick sm:text-4xl">
            Merch
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {MERCH_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className="bg-white p-3 pb-5 shadow-[0_8px_20px_rgba(36,20,17,0.15)]"
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              <PhotoPlaceholder
                label={item.name}
                hint="Product photo on plain background"
                aspect="square"
              />
              <p className="mt-3 text-center font-display font-semibold text-ink">
                {item.name}
              </p>
              <p className="text-center text-sm text-brick">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BANDCAMP_MERCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brick px-7 py-3 font-semibold text-cream shadow-[0_4px_0_0_#5c1f17] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          >
            Shop the Full Store on Bandcamp
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
