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
          {/* <span className="font-script text-2xl text-crimson">the scrapbook</span> */}
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
            Morgan Alyse is a songwriter and performer currently based out of Worcester, MA. Originally from Connecticut Morgan is now well-known in the central mass open mic community for her Jazzy, folk, uke stylings, and soulfully sweet original songs. While the ukulele is her main instrument, she has been known to break out a guitar, mandolin, and even a dulcimer from time to time. In November 2023 Morgan became the winner of the first annual Otter River Song Writers Contest, at the Brew Barn in Phillipston MA. She released her first two-track EP Quarantine Lullabies in the spring of 2020, and released two Singles; grow, and Got 40 this year. Both were featured in Worcester Magazine.
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
