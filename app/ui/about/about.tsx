"use client";

import {
  IconShield,
  IconBuildingSkyscraper,
  IconNetwork,
  IconDatabase,
  IconTarget,
  IconWorld,
  IconPhone,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const founderData = {
  name: "Ibrahim Isah Liman",
  title: "Cybersecurity Expert | Founder & Lead AI Engineer",
  description:
    "With over 5 years of experience in cybersecurity and artificial intelligence, Ibrahim founded DeepSecure360 to tackle the ever-evolving digital threat landscape. His leadership in threat intelligence, automation, and forensic analysis has positioned DS360 at the forefront of cyber defense innovation.",
  achievements: [
    { id: "exp", title: "5+ Years Experience", icon: <IconShield size={24} /> },
    {
      id: "founder",
      title: "Founder of DS360",
      icon: <IconBuildingSkyscraper size={24} />,
    },
    { id: "leader", title: "Industry Leader", icon: <IconTarget size={24} /> },
  ],
  contact: {
    phone: "+2348142727874",
    email: "admin@deepsecure360.com",
    linkedin: "#",
  },
};

const protectionScope = [
  {
    id: "critical-infrastructure",
    icon: <IconShield size={28} className=" text-blue-500" />,
    title: "Critical Infrastructure",
    desc: "Protecting essential services and systems that form the backbone of modern society.",
  },
  {
    id: "enterprises",
    icon: <IconBuildingSkyscraper size={28} className=" text-blue-500" />,
    title: "Enterprises",
    desc: "Safeguarding business operations, sensitive data, and intellectual property.",
  },
  {
    id: "government-systems",
    icon: <IconNetwork size={28} className=" text-blue-500" />,
    title: "Government Systems",
    desc: "Securing national assets and classified information with top-tier protection.",
  },
  {
    id: "online-platforms",
    icon: <IconDatabase size={28} className=" text-blue-500" />,
    title: "Online Platforms",
    desc: "Defending against cyber threats targeting modern digital services.",
  },
  {
    id: "threat-intelligence",
    icon: <IconTarget size={28} className=" text-blue-500" />,
    title: "Threat Intelligence",
    desc: "Tracking, analyzing, and neutralizing digital threats before they materialize.",
  },
  {
    id: "global-coverage",
    icon: <IconWorld size={28} className=" text-blue-500" />,
    title: "Global Coverage",
    desc: "Our network spans globally, ensuring seamless protection across all continents.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-black text-gray-200 px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* ✨ Starry Background */}
      <div className="absolute inset-0 bg-[radial-gradient(white,transparent_2px)] [background-size:25px_25px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-black"></div>

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          About Us
        </h2>
        <p className="text-gray-400 leading-relaxed">
          We are a team of cybersecurity specialists and developers dedicated to
          protecting the digital world. Our mission is to defend
          infrastructures, empower enterprises, and outsmart evolving cyber
          threats through intelligence and automation.
        </p>
      </header>

      {/* 🧱 Protection Scope */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {protectionScope.map((item) => (
          <div
            key={item.id}
            className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-transparent transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(0,123,255,0.3)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span>{item.icon}</span>
              <h3 className="font-semibold text-lg text-white group-hover:text-blue-400">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 🚀 Mission */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-3">
          Our Mission
        </h3>
        <p className="text-gray-400 leading-relaxed">
          To empower global ecosystems through intelligent, adaptive, and
          proactive cybersecurity that neutralizes threats before they strike.
        </p>
      </div>

      {/* 🧑‍💻 Founder Section */}
      <div
        id="founder"
        className="mt-24 relative max-w-6xl mx-auto bg-gradient-to-r from-black-950/40 via-black/60 to-transparent border border-blue-950/80 rounded-2xl p-10 backdrop-blur-lg shadow-[0_0_40px_-10px_rgba(0,0,0,0.25)]"
      >
        {/* Circuit-like background lines */}
        <div className="absolute inset-0 opacity-10 bg-[url('/circuit-pattern.svg')] bg-cover bg-center pointer-events-none rounded-2xl"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-10">
          Meet the Visionary
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Founder Image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-[0_0_30px_-5px_rgba(0,128,255,0.4)] flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
            <span className="text-white text-sm">Image Placeholder</span>
          </div>

          {/* Founder Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
              {founderData.name}
            </h3>
            <p className="text-blue-400 mb-4 text-sm md:text-base">
              {founderData.title}
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              {founderData.description}
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {founderData.achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="bg-blue-900/10 border border-blue-800/30 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-blue-900/20 transition-all"
                >
                  <div className="text-blue-400 mb-2">{ach.icon}</div>
                  <h4 className="text-sm font-medium text-white">
                    {ach.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
              <a
                href={`tel:${founderData.contact.phone}`}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <IconPhone size={18} /> {founderData.contact.phone}
              </a>
              <a
                href={`mailto:${founderData.contact.email}`}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <IconMail size={18} /> {founderData.contact.email}
              </a>
              <a
                href={founderData.contact.linkedin}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <IconBrandLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
