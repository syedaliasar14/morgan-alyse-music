"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

interface SiteShellProps {
  children: React.ReactNode;
  instagramUrl?: string;
  spotifyUrl?: string;
}

export function SiteShell({ children, instagramUrl, spotifyUrl }: SiteShellProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter instagramUrl={instagramUrl} spotifyUrl={spotifyUrl} />
    </>
  );
}
