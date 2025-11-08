import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";

const slides = [
  { title: "Welcome to classical studio", subtitle: "Learn, Perform, Shine", image: "/images/slide1.jpg" },
  { title: "Kathak Classes", subtitle: "Groove like a pro", image: "/images/slide2.jpg" },
  { title: "Move like a pro", subtitle: "Grace in motion", image: "/images/slide3.jpg" },
];

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero-title", { y: 50, opacity: 1, duration: 1 });
    gsap.from(".hero-subtitle", { y: 30, opacity: 1, duration: 1, delay: 0.3 });
    gsap.from(".hero-button", { y: 20, opacity: 1, duration: 1, delay: 0.6 });
  }, []);

  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
           <div
              className="w-full h-screen bg-cover bg-center flex flex-col justify-end items-center text-white pb-32"
               style={{ backgroundImage: `url(${slide.image})` }}
    >

              <h1 className="hero-title text-5xl font-bold animate-fadeIn">{slide.title}</h1>
              <p className="hero-subtitle mt-4 text-2xl animate-fadeIn">{slide.subtitle}</p>
              <a
                href="#classes"
                className="hero-button mt-6 px-6 py-3 bg-red-500 rounded-lg text-lg font-semibold hover:bg-red-600"
              >
                Join Now
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
