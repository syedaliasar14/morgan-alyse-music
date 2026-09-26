import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Event = {
  month: string;
  date: string;
  name: string;
  description: string;
  externalUrl: string;
};

const EVENTS: Event[] = [
  {
    month: "Feb",
    date: "14",
    name: "The Blue Room",
    description: "An intimate evening of live music in Nashville.",
    externalUrl: "#",
  },
  {
    month: "Feb",
    date: "21",
    name: "Paper Heart Lounge",
    description: "Morgan joins a night of singer-songwriters in Austin.",
    externalUrl: "#",
  },
  {
    month: "Mar",
    date: "7",
    name: "The Velvet Note",
    description: "A warm, late-night set in Chicago.",
    externalUrl: "#",
  },
  {
    month: "Sep",
    date: "22",
    name: "Sweetheart Hall",
    description: "An evening of original songs in Brooklyn.",
    externalUrl: "#",
  },
];

export function CalendarSection() {
  return (
    <section className="paper-grain bg-cream" id="events">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          {/* <span className="font-script text-2xl text-crimson">save the date</span> */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Image
              src="/decor/hand-drawn-heart1.png"
              alt=""
              aria-hidden="true"
              width={100}
              height={100}
              className="h-8 w-8 object-contain sm:h-11 sm:w-11"
            />
            <h2 className="mt-1 font-display text-2xl font-bold italic text-brick sm:text-4xl">
              Upcoming Events
            </h2>
            <Image
              src="/decor/hand-drawn-heart1.png"
              alt=""
              aria-hidden="true"
              width={100}
              height={100}
              className="h-8 w-8 -scale-x-100 object-contain sm:h-11 sm:w-11"
            />
          </div>
        </div>

        <ul className="mt-10 flex flex-col gap-4">
          {EVENTS.map((event) => (
            <li
              key={`${event.name}-${event.date}`}
              className="flex flex-col gap-5 bg-white/75 p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex min-h-20 w-20 shrink-0 flex-col items-center justify-center border-2 border-brick bg-brick px-2 text-center text-cream shadow-[3px_3px_0_var(--color-gold)]">
                  <span className="text-lg uppercase">{event.month}</span>
                  <span className="mt-1 text-lg leading-tight tracking-wide">
                    {event.date}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="font-display text-2xl font-semibold italic text-brick">
                    {event.name}
                  </p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink">
                    {event.description}
                  </p>
                </div>
              </div>
              <Link
                href={event.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex btn-outline gap-2 items-center text-sm w-max self-end"
              >
                More info <ExternalLink className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
