import { TapePiece } from "@/components/decor/tape-piece";

export function SpotifySection() {
  return (
    <section id="spotify" className="bg-[url('/textures/floral.png')] bg-cover relative">
      {/* <div className="absolute inset-0 bg-black/30 z-0"/> */}
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        {/* <span className="font-script text-2xl text-crimson">press play</span> */}
        {/* <h2 className="mt-1 font-display text-3xl font-bold italic text-white z-10 relative sm:text-4xl">
          Listen on Spotify
        </h2> */}

        <div className="relative mt-10">
          <TapePiece className="-top-3 left-8 z-10" color="gold" rotate={-10} />
          <TapePiece className="-top-3 right-8 z-10" color="gold" rotate={8} />
          <div className="border-4 border-brick h-max rounded-2xl shadow-[0_14px_35px_rgba(36,20,17,0.25)]">
            <iframe
              title="Morgan Alyse on Spotify"
              src="https://open.spotify.com/embed/artist/1MuVQBPUPONIB3UHHJgc2W?utm_source=generator&theme=1"
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
