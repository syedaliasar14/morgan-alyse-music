import { HeroRelease } from "@/app/components/hero-release";
import { MorganAlyseSection } from "@/app/components/morgan-alyse-section";
import { CalendarSection } from "@/app/components/calendar-section";
import { SpotifySection } from "@/app/components/spotify-section";
import { MerchSection } from "@/app/components/merch-section";

export default function Home() {
  return (
    <>
      <HeroRelease />
      <MorganAlyseSection />
      <CalendarSection />
      <SpotifySection />
      <MerchSection />
    </>
  );
}
