import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/components/contact-form";
import { TapePiece } from "@/components/decor/tape-piece";

export const metadata: Metadata = {
  title: "Contact | Morgan Alyse",
  description: "Get in touch with Morgan Alyse.",
};

export default function ContactPage() {
  return (
    <div className="paper-grain flex flex-1 items-center justify-center px-5 py-16 sm:px-8 sm:py-24">
      <div className="relative w-full max-w-xl border-4 border-white bg-cream/95 p-8 shadow-[0_12px_30px_rgba(36,20,17,0.2)] sm:p-12">
        <TapePiece className="-top-4 left-10 z-10" color="gold" rotate={-6} />
        <TapePiece className="-top-4 right-10 z-10" color="crimson" rotate={6} />

        <div className="text-center">
          <span className="font-script text-2xl text-crimson">say hello</span>
          <h1 className="mt-1 font-display text-4xl font-bold italic text-brick">
            Get In Touch
          </h1>
          <p className="mt-3 text-ink/70">
            Booking, press, or just want to share how a song made you feel?
            Send a note below.
          </p>
        </div>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
