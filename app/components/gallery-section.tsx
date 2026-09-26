"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { HOME_PAGE_QUERY_RESULT } from "@/sanity.types";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

function GalleryControls() {
  const swiper = useSwiper();

  return (
    <nav aria-label="Gallery navigation" className="mt-6 flex justify-center gap-3">
      <button
        type="button"
        aria-label="Previous gallery image"
        onClick={() => swiper.slidePrev()}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brick text-brick transition hover:bg-brick hover:text-cream"
      >
        <ArrowLeft aria-hidden="true" size={18} />
      </button>
      <button
        type="button"
        aria-label="Next gallery image"
        onClick={() => swiper.slideNext()}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brick text-brick transition hover:bg-brick hover:text-cream"
      >
        <ArrowRight aria-hidden="true" size={18} />
      </button>
    </nav>
  );
}

export function GallerySection({ homePage }: { homePage: HOME_PAGE_QUERY_RESULT }) {
  const gallery = homePage?.gallery;
  const images = gallery?.images?.filter((image) => image?.asset) ?? [];
  const maxSlidesPerView = Math.max(1, images.length - 1);

  if (images.length === 0) return null;

  return (
    <section className="paper-grain bg-white overflow-hidden" aria-label="Photo gallery">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div>
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={Math.min(1.15, maxSlidesPerView)}
            breakpoints={{
              640: { slidesPerView: Math.min(2, maxSlidesPerView) },
              1024: { slidesPerView: Math.min(3, maxSlidesPerView) },
            }}
            loop={images.length > 1}
            autoplay={
              images.length > 1
                ? {
                    delay: 3500,
                    disableOnInteraction: false,
                  }
                : false
            }
            className="!overflow-visible"
          >
            {images.map((image) => {
              if (!image?.asset) return null;

              return (
                <SwiperSlide key={image._key ?? image.asset._id}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream shadow-[0_8px_20px_rgba(36,20,17,0.18)]">
                    <Image
                      src={urlFor(image).width(1000).height(750).fit("crop").url()}
                      alt={image.alt || ""}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 88vw"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
            {images.length > 1 && (
              <GalleryControls />
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}