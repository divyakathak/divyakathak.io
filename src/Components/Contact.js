import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.from(formRef.current, { opacity: 1, y: 50, duration: 1 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xrbrzkvb", { // Replace with your Formspree URL
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Error submitting the form.");
    }
  };

  return (
    <section id="contact" className="p-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6 text-gray-700">
          <h3 className="text-2xl font-semibold">Reach Us At</h3>
          <p><strong>Phone:</strong> +91 9870442949</p>
          <p><strong>Email:</strong> divyabhardwaj020@gmail.com</p>
          <p><strong>Address:</strong> Rathi Hospital Gali, Krishna colony, Narela, Delhi, India</p>
        </div>

        {/* Contact Form */}
        {!submitted ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-4 border rounded-lg"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-4 border rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-4 border rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-2xl text-green-600 font-semibold">
            Thank you! Your message has been sent,We'll contact you soon          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
