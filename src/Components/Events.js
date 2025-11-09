import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import images from Assets
import summerCamp from "../Assets/summercmp.jpg";
import online from "../Assets/online.jpg";
import offline from "../Assets/offline.JPG";

const events = [
  {
    title: "Summer Dance Camp",
    date: "NOT AVAILABLE NOW",
    description: "Learn Kathak, Hip-Hop in a fun summer camp!",
    image: summerCamp,
  },
  {
    title: "Online Dance Workshop",
    date: "SOON",
    description: "Join our live online sessions from anywhere in the world.",
    image: online,
  },
  {
    title: "Classical Dance Workshop",
    date: "SOON",
    description: "Master classical moves with our professional instructors.",
    image: offline,
  },
];

const Events = () => {
  const eventRefs = useRef([]);

  useEffect(() => {
    eventRefs.current.forEach((el, i) => {
      gsap.from(el, { opacity: 1, y: 50, duration: 1, delay: i * 0.3 });
    });
  }, []);

  return (
    <section id="events" className="p-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => (eventRefs.current[index] = el)}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-red-500 font-bold mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
