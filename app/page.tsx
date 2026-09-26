import { HeroRelease } from "@/app/components/hero-release";
import { MorganAlyseSection } from "@/app/components/morgan-alyse-section";
import { EventsSection } from "@/app/components/events-section";
import { SpotifySection } from "@/app/components/spotify-section";
import { MerchSection } from "@/app/components/merch-section";
import { GallerySection } from "@/app/components/gallery-section";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/queries/home-page";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries/site-settings";

export default async function Home() {
  const [{ data: homePage }, { data: siteSettings }] = await Promise.all([
    sanityFetch({ query: HOME_PAGE_QUERY }),
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
  ]);

  return (
    <>
      <HeroRelease homePage={homePage} />
      <MorganAlyseSection homePage={homePage} />
      <EventsSection homePage={homePage} />
      <SpotifySection />
      <MerchSection
        homePage={homePage}
        bandcampMerchUrl={siteSettings?.bandcampMerchUrl}
      />
      <GallerySection homePage={homePage} />
    </>
  );
}
