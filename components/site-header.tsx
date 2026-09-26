"use client";

import Link from "next/link";
import { AlignJustify, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#events", label: "Events" },
  { href: "/#merch", label: "Merch" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brick/80 border-brick/20 backdrop-blur-sm shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-handwriting text-xl text-cream">
            Morgan Alyse
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium tracking-wide text-cream/80 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger className="sm:hidden">
            <AlignJustify className="h-5 w-5 text-cream" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-cream text-ink">
            <SheetHeader className="border-b border-brick/20">
              <SheetTitle className="font-handwriting text-2xl text-crimson">
                Morgan Alyse
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-1 flex-col gap-2 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-3 font-medium text-ink/80 transition-colors hover:bg-brick/5 hover:text-crimson"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>

            <p className="mt-auto border-t border-brick/20 px-4 pt-4 pb-2 text-xs text-ink/60">
              &copy; {new Date().getFullYear()} Morgan Alyse. All rights reserved.
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
