"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-gray-300 py-12 px-6 md:px-16">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-black">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid gap-10 md:grid-cols-4 z-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              DeepSecure360
            </span>
            {/* Reduced Glow */}
            <span className="absolute inset-0 blur-sm bg-gradient-to-r from-blue-500/10 via-cyan-400/8 to-blue-600/10 -z-10 rounded-lg"></span>
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            AI-powered cybersecurity solutions for the modern digital landscape.
            Protecting critical infrastructures across the globe.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Founder
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-300">
                Threat Detection
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Digital Forensics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Incident Response
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Security Consulting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Compliance
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Whitepapers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 z-10">
        © 2025 DeepSecure360. All rights reserved.
      </div>
    </footer>
  );
}
