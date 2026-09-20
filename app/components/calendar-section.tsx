import { MapPin, Ticket } from "lucide-react";

type TourStop = {
  date: string;
  month: string;
  city: string;
  venue: string;
  ticketUrl: string;
};

const TOUR_DATES: TourStop[] = [
  {
    date: "14",
    month: "Feb",
    city: "Nashville, TN",
    venue: "The Blue Room",
    ticketUrl: "#",
  },
  {
    date: "21",
    month: "Feb",
    city: "Austin, TX",
    venue: "Paper Heart Lounge",
    ticketUrl: "#",
  },
  {
    date: "07",
    month: "Mar",
    city: "Chicago, IL",
    venue: "The Velvet Note",
    ticketUrl: "#",
  },
  {
    date: "22",
    month: "Mar",
    city: "Brooklyn, NY",
    venue: "Sweetheart Hall",
    ticketUrl: "#",
  },
];

export function CalendarSection() {
  return (
    <section className="paper-grain bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="text-center">
          <span className="font-script text-2xl text-crimson">save the date</span>
          <h2 className="mt-1 font-display text-3xl font-bold italic text-brick sm:text-4xl">
            Upcoming Shows
          </h2>
        </div>

        <ul className="mt-10 flex flex-col gap-4">
          {TOUR_DATES.map((stop) => (
            <li
              key={`${stop.city}-${stop.date}`}
              className="flex flex-wrap items-center justify-between gap-4 border-2 border-dashed border-brick/30 bg-white/80 p-5 shadow-sm sm:flex-nowrap"
            >
              <div className="flex items-center gap-4">
                <div className="flex w-16 shrink-0 flex-col items-center justify-center border-2 border-brick bg-brick text-cream">
                  <span className="text-xs uppercase tracking-wide">{stop.month}</span>
                  <span className="font-display text-2xl font-bold">{stop.date}</span>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{stop.venue}</p>
                  <p className="flex items-center gap-1 text-sm text-ink/60">
                    <MapPin className="h-3.5 w-3.5" /> {stop.city}
                  </p>
                </div>
              </div>
              <a
                href={stop.ticketUrl}
                className="flex items-center gap-2 rounded-full border-2 border-crimson px-5 py-2 font-semibold text-crimson transition-colors hover:bg-crimson hover:text-white"
              >
                <Ticket className="h-4 w-4" /> Tickets
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
