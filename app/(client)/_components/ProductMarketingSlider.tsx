"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css/thumbs";
import type { Swiper as SwiperType } from "swiper";
import { productMarketingContent } from "@/data/data";

const ProductMarketingSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const controllers = [
    "Customer Focused",
    "Agile and Adaptable",
    "Compliance Ready",
    "Secure and Safe",
  ];

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="hidden lg:flex flex-wrap justify-center items-center space-x-4 py-8"
      >
        {controllers.map((controller, index) => (
          <SwiperSlide key={index}>
            <button
              className={`px-9 py-2 text-lg font-semibold rounded-full text-blue-500 whitespace-nowrap ${
                index === activeIndex ? "bg-blue-200" : ""
              }`}
            >
              {controller}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {productMarketingContent.map((content) => (
          <SwiperSlide key={content.id}>
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 md:p-16 bg-white shadow-blue-200/50 shadow-2xl h-full lg:h-[550px] mb-6">
              <div className="space-y-6 md:space-y-8">
                <h5 className="uppercase text-sm md:text-base font-semibold text-blue-500 tracking-wider">
                  {content.subtitle}
                </h5>
                <h2 className="text-2xl md:text-[40px] font-semibold text-blue-950">
                  {content.title}
                </h2>
                <Image
                  src={content.image}
                  alt={content.title}
                  width={500}
                  height={500}
                  className="block md:hidden w-full h-52 object-cover rounded-2xl"
                />
                <p className="text-base text-blue-950">
                  <strong>{content.content1}</strong>
                </p>
                <p className="text-base text-blue-950">{content.content2}</p>
              </div>
              <div className="hidden md:block">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductMarketingSlider;
