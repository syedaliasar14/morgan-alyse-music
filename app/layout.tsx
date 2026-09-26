import type { Metadata } from "next";
import { Poppins, Playfair_Display, Caveat, Beth_Ellen } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries/site-settings";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bethEllen = Beth_Ellen({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { data: siteSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  return {
    title: siteSettings?.title ?? "Morgan Alyse",
    description:
      siteSettings?.description ??
      "Official site for Morgan Alyse — new releases, events, and more by Worcester's Sweetheart, herself.",
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { data: siteSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${playfairDisplay.variable} ${caveat.variable} ${bethEllen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteShell
          instagramUrl={siteSettings?.instagramUrl ?? undefined}
          spotifyUrl={siteSettings?.spotifyUrl ?? undefined}
        >
          {children}
        </SiteShell>
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
