import React, { useState, useEffect } from "react";

// Import images from Assets
import class1 from "../Assets/class1.JPG";
import class2 from "../Assets/class2.JPG";
import class3 from "../Assets/class3.JPG";

const photos = [
  { name: "KATHAK", image: class1 },
  { name: "Hip Hop", image: class2 },
  { name: "CLASSICAL", image: class3 },
];

const Photo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="photo" className="p-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Our Photos</h2>

      <div className="relative w-full max-w-4xl mx-auto h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.image}
            alt={photo.name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {photos.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photo;
