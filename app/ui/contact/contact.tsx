"use client";
import React, { useEffect } from "react";
import { animate, inView } from "motion";

const ContactSection: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".fade-up");
    if (!elements.length || !inView || !animate) return;

    const cleanups = Array.from(elements).map((element, index) => {
      return inView(element as Element, () => {
        animate(
          element as Element,
          {
            opacity: [0, 1],
            transform: ["translateY(40px)", "translateY(0px)"],
          },
          { duration: 0.8, ease: "easeOut", delay: index * 0.1 }
        );
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-black text-gray-200 py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* 🌌 Background Grid + Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(white,transparent_2px)] [background-size:25px_25px] opacity-10"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-900/30 via-transparent to-black"></div>

      {/* 🧭 Header */}
      <div className="fade-up text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-400 text-lg">
          Get in touch with our cybersecurity experts
        </p>
      </div>

      {/* 🧱 Info + Form Container */}
      <div className="fade-up max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="fade-up bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">
            Reach Out
          </h3>
          <div className="space-y-5">
            <div>
              <h4 className="text-sm uppercase text-gray-400">Email</h4>
              <p className="text-white text-lg">
                <a
                  href="mailto:admin@deepsecure360.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  admin@deepsecure360.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase text-gray-400">Location</h4>
              <p className="text-white text-lg">Abuja, Nigeria</p>
            </div>
            <div>
              <h4 className="text-sm uppercase text-gray-400">Phone</h4>
              <p className="text-white text-lg">+2348142727874</p>
            </div>
          </div>

          <p className="mt-10 text-gray-500 italic text-sm">
            Built with integrity. Driven by innovation.
          </p>
        </div>

        {/* Right: Demo Request Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="fade-up bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">
            Request a Demo
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Company
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Company address"
                className="w-full p-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg shadow-blue-600/20"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
