// src/components/Navbar/NavbarPro.tsx
"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiUser, FiChevronDown } from "react-icons/fi";

const NavbarPro = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-base-100 shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo1.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl">WSN</span>
      </Link>

      {/* Menu Links */}
      <ul className="hidden md:flex items-center gap-6">
        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
        <li><Link href="/services" className="hover:text-blue-500">Services</Link></li>
        <li><Link href="/team" className="hover:text-blue-500">Teams</Link></li>
        <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Register/Login Button */}
        <Link href="/register" className="btn btn-primary btn-sm">
          Register
        </Link>

        {/* User Avatar Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-1 btn btn-ghost btn-circle"
            onClick={toggleDropdown}
          >
            <FiUser className="text-xl" />
            <FiChevronDown />
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-md p-2 z-50">
              <li>
                <Link href="/profile" className="block px-4 py-2 hover:bg-base-200 rounded">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/settings" className="block px-4 py-2 hover:bg-base-200 rounded">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/logout" className="block px-4 py-2 hover:bg-base-200 rounded">
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Nepal Flag */}
        <div className="hidden sm:block">
          <Image src="/flags/NepalFlag.png" alt="Nepal Flag" width={30} height={20} className="rounded-sm" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavbarPro;
