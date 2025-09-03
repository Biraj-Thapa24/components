"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-800 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo1.png" alt="Logo" width={40} height={40} />
            <span className="font-bold text-xl">WSN</span>
          </Link>
          <p className="text-gray-600">
            Your one-stop solution for web development, design, and digital services.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link href="/teams" className="hover:text-blue-500">Our Team</Link></li>
            <li><Link href="/careers" className="hover:text-blue-500">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="flex flex-col gap-2">
            <li><Link href="/web" className="hover:text-blue-500">Web Development</Link></li>
            <li><Link href="/mobile" className="hover:text-blue-500">Mobile Apps</Link></li>
            <li><Link href="/design" className="hover:text-blue-500">UI/UX Design</Link></li>
            <li><Link href="/seo" className="hover:text-blue-500">SEO Services</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-4">Subscribe</h3>
          <p className="text-gray-600 mb-2">Get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:flex-1"
            />
            <button type="submit" className="btn btn-primary sm:btn-rectangle">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-300 mt-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© 2025 MyApp. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-500">Terms of Service</Link>
          <Link href="/support" className="hover:text-blue-500">Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
