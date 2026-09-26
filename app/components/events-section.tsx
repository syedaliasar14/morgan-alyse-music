import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";

function formatEventDate(eventDate: string | null | undefined) {
  if (!eventDate) return { month: "", day: "" };

  const date = new Date(`${eventDate}T00:00:00Z`);
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" }).format(date),
    day: String(date.getUTCDate()),
  };
}

export async function EventsSection({ homePage }: { homePage: HOME_PAGE_QUERY_RESULT }) {
  await connection();

  const today = new Date().toISOString().slice(0, 10);
  const events = homePage?.events?.events ?? [];
  const visibleEvents = (
    homePage?.events?.hidePastEvents
      ? events.filter((event) => !event.eventDate || event.eventDate >= today)
      : events
  ).map((event) => ({
    ...event,
    displayDate: formatEventDate(event.eventDate),
  }));

  return (
    <section className="paper-grain bg-cream" id="events">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
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
              {homePage?.events?.title || "Upcoming Events"}
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

        {visibleEvents.length > 0 ? (
          <ul className="mt-10 flex flex-col gap-4">
            {visibleEvents.map((event) => (
              <li
                key={event._key}
                className="flex flex-col gap-5 bg-white/75 p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex min-h-20 w-20 shrink-0 flex-col items-center justify-center border-2 border-brick bg-brick px-2 text-center text-cream shadow-[3px_3px_0_var(--color-gold)]">
                    <span className="text-lg uppercase">{event.displayDate.month}</span>
                    <span className="mt-1 text-lg leading-tight tracking-wide">
                      {event.displayDate.day}
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="font-display text-2xl font-semibold italic text-brick">
                      {event.title}
                    </p>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink">
                      {event.description}
                    </p>
                  </div>
                </div>
                {event.link && (
                  <Link
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex btn-outline gap-2 items-center text-sm w-max self-end"
                  >
                    More info <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center text-ink">
            There are no upcoming events at the moment. Please check back soon.
          </p>
        )}
      </div>
    </section>
  );
}