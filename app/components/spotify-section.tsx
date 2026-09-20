import { TapePiece } from "@/components/decor/tape-piece";

export function SpotifySection() {
  return (
    <section id="spotify" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <span className="font-script text-2xl text-crimson">press play</span>
        <h2 className="mt-1 font-display text-3xl font-bold italic text-brick sm:text-4xl">
          Listen on Spotify
        </h2>

        <div className="relative mt-10">
          <TapePiece className="-top-3 left-8 z-10" color="gold" rotate={-10} />
          <TapePiece className="-top-3 right-8 z-10" color="crimson" rotate={8} />
          <div className="border-4 border-brick/10 bg-cream p-3 shadow-[0_10px_25px_rgba(36,20,17,0.15)]">
            {/*
              Replace the artist ID below with Morgan Alyse's real Spotify
              artist ID (Spotify for Artists > Share > Copy Link, or grab it
              from the artist URL: open.spotify.com/artist/<ID>).
            */}
            <iframe
              title="Morgan Alyse on Spotify"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/0000000000000000000000?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
