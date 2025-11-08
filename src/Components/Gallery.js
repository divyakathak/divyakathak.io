import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/images/gallery1.JPG",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
  "/images/gallery9.jpg",
];

const Gallery = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 1,       // start invisible
        scale: 0.8,       // start smaller
        duration: 0.8,
        delay: i * 0.4,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    });
  }, []);

  return (
    <section id="gallery" className="p-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            className="overflow-hidden rounded-lg"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
