import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const classList = [
  { name: "KATHAK", description: "Learn the coolest street moves", image: "/images/class1.jpg" },
  { name: "Hip Hop", description: "Graceful and elegant moves", image: "/images/class2.jpg" },
  { name: "CLASSICAL", description: "Express yourself through dance", image: "/images/class3.jpg" },
];

const Classes = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      gsap.from(el, { opacity: 1, y: 50, duration: 1, delay: i * 0.3 });
    });
  }, []);

  return (
    <section id="classes" className="p-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Our Classes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {classList.map((cls, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={cls.image} alt={cls.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{cls.name}</h3>
              <p className="text-gray-600">{cls.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
