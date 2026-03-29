import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const HeroSlider = ({ children }: { children: React.ReactNode }) => {
  const images = [
    '/images/hero-energy.jpg',
    '/images/hero-engineers.jpg',
    '/images/hero-scientist.jpg',
    '/images/hero-manufacturing.jpg'
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#02040a]">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 scale-110">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover opacity-50"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/80 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

