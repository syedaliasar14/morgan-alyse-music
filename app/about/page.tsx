import type { Metadata } from "next";
import { PhotoTextSection } from "@/app/about/components/photo-text-section";
import { HeartDivider } from "@/components/decor/heart-divider";

export const metadata: Metadata = {
  title: "About | Morgan Alyse",
  description: "The story behind Morgan Alyse's music.",
};

export default function AboutPage() {
  return (
    <div className="dotted-hearts-bg">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="pt-16 pb-6 text-center sm:pt-24">
          <span className="font-script text-2xl text-crimson">the scrapbook</span>
          <h1 className="mt-1 font-display text-4xl font-bold italic text-brick sm:text-5xl">
            About Morgan
          </h1>
        </div>

        <PhotoTextSection
          eyebrow="chapter one"
          title="Her Story"
          photoLabel="Childhood / early-life photo"
          photoHint="Old-style snapshot of Morgan as a kid or teen with a guitar/piano"
          caption="little heart, big dreams"
          align="left"
        >
          <p>
            Morgan Alyse grew up scribbling lyrics in the margins of school
            notebooks and taping polaroids to her bedroom wall. Music found
            her early — she wrote her first song at eleven, on a hand-me-down
            guitar with a heart sticker over the crack in the body.
          </p>
          <p>
            That same sense of handmade sentimentality still shapes every
            record she makes today.
          </p>
        </PhotoTextSection>

        <HeartDivider />

        <PhotoTextSection
          eyebrow="chapter two"
          title="The Sound"
          photoLabel="In-studio / songwriting photo"
          photoHint="Candid shot of Morgan writing or recording, warm lighting"
          caption="paper hearts & piano keys"
          align="right"
        >
          <p>
            Blending vintage pop melodies with bedroom-folk intimacy, Morgan&apos;s
            sound is built around warm analog textures, hand-percussion, and
            lyrics that read like diary entries. Every song starts as a
            scrapbook page — pressed flowers, torn photographs, half-finished
            poems — before it becomes music.
          </p>
        </PhotoTextSection>

        <HeartDivider />

        <PhotoTextSection
          eyebrow="chapter three"
          title="On Stage"
          photoLabel="Live performance photo"
          photoHint="Live show shot, warm stage lighting, red/gold tones"
          caption="see you at the show"
          align="left"
        >
          <p>
            Live, Morgan turns every venue into a shared scrapbook — string
            lights, handwritten setlists, and a crowd that sings every word
            back to her. It&apos;s the closest thing to flipping through a
            memory book together.
          </p>
        </PhotoTextSection>
      </div>
    </div>
  );
}
