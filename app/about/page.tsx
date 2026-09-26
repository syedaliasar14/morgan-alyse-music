import type { Metadata } from "next";
import { PhotoTextSection } from "@/app/about/components/photo-text-section";
import { HeartDivider } from "@/components/decor/heart-divider";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries/about-page";

export const metadata: Metadata = {
  title: "About Morgan Alyse",
  description: "The story behind Morgan Alyse's music.",
};

const FALLBACK_MORGAN_TEXT = "Morgan Alyse is a songwriter and performer currently based out of Worcester, MA. Originally from Connecticut Morgan is now well-known in the central mass open mic community for her Jazzy, folk, uke stylings, and soulfully sweet original songs. While the ukulele is her main instrument, she has been known to break out a guitar, mandolin, and even a dulcimer from time to time. In November 2023 Morgan became the winner of the first annual Otter River Song Writers Contest, at the Brew Barn in Phillipston MA. She released her first two-track EP Quarantine Lullabies in the spring of 2020, and released two Singles; grow, and Got 40 this year. Both were featured in Worcester Magazine.";
const FALLBACK_BAND_TEXT = "Blending vintage pop melodies with bedroom-folk intimacy, Morgan's sound is built around warm analog textures, hand-percussion, and lyrics that read like diary entries. Every song starts as a scrapbook page — pressed flowers, torn photographs, half-finished poems — before it becomes music.";

type AboutSectionContent = {
  _key?: string | null;
  title?: string | null;
  text?: string | null;
  image?: {
    alt?: string | null;
    asset?: { url?: string | null } | null;
  } | null;
};

function SectionText({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/\n+/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph, index) => <p key={`${index}-${paragraph}`}>{paragraph}</p>)}
    </>
  );
}

function sectionImage(section?: AboutSectionContent | null) {
  return {
    imageSrc: section?.image?.asset?.url || "/morgan-alyse.jpg",
    imageAlt: section?.image?.alt || section?.title || "Morgan Alyse",
  };
}

export default async function AboutPage() {
  const { data: aboutPage } = await sanityFetch({ query: ABOUT_PAGE_QUERY });
  const morganSection = aboutPage?.morganSection;
  const bandSection = aboutPage?.bandSection;
  const additionalSections = aboutPage?.additionalSections ?? [];
  const morganImage = sectionImage(morganSection);
  const bandImage = sectionImage(bandSection);

  return (
    <div className="dotted-hearts-bg">
      <div className="">
        <div className="pt-16 pb-6 text-center sm:pt-24 bg-[url('/textures/floral.png')] bg-cover relative">
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
          {/* <span className="font-script text-2xl text-crimson">the scrapbook</span> */}
          {/* <h1 className="mt-1 z-10 relative max-w-5xl mx-auto px-5 sm:px-8 font-display text-4xl font-bold italic text-white sm:text-5xl">
            About Morgan Alyse
          </h1> */}
        </div>

        <PhotoTextSection
          title={morganSection?.title || "Morgan Alyse"}
          imageSrc={morganImage.imageSrc}
          imageAlt={morganImage.imageAlt}
          heartSrc="/decor/scrapbook-heart1.png"
          align="left"
        >
          <SectionText text={morganSection?.text || FALLBACK_MORGAN_TEXT} />
        </PhotoTextSection>

        <HeartDivider />

        <PhotoTextSection
          title={bandSection?.title || "The Band"}
          imageSrc={bandImage.imageSrc}
          imageAlt={bandImage.imageAlt}
          heartSrc="/band-logo.png"
          align="right"
        >
          <SectionText text={bandSection?.text || FALLBACK_BAND_TEXT} />
        </PhotoTextSection>

        {additionalSections.map((section, index) => {
          const image = sectionImage(section);

          return (
            <div key={section._key}>
              <HeartDivider />
              <PhotoTextSection
                title={section.title || "About Morgan Alyse"}
                imageSrc={image.imageSrc}
                imageAlt={image.imageAlt}
                heartSrc={index % 2 === 0 ? "/decor/scrapbook-heart2.png" : "/decor/hand-drawn-heart1.png"}
                align={index % 2 === 0 ? "left" : "right"}
              >
                <SectionText text={section.text || ""} />
              </PhotoTextSection>
            </div>
          );
        })}
      </div>
    </div>
  );
}
