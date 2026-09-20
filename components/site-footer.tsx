import Link from "next/link";
import { Camera, Music2, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-gold bg-brick text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-8">
        <span className="font-display text-2xl italic">Morgan Alyse</span>
        <div className="flex items-center gap-5">
          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-cream/80 transition-colors hover:text-gold"
          >
            <Camera className="h-5 w-5" />
          </Link>
          <Link
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="text-cream/80 transition-colors hover:text-gold"
          >
            <Music2 className="h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            aria-label="Contact"
            className="text-cream/80 transition-colors hover:text-gold"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        <p className="font-script text-lg text-gold">with love, always</p>
        <p className="text-xs text-cream/60">
          &copy; {new Date().getFullYear()} Morgan Alyse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
