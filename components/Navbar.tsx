"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center h-full">
            <Link href="/" className="flex-shrink-0 flex items-center h-full">
              <Image
                src="/aipath-logo.png"
                alt="AIpath Logo"
                width={240}
                height={64}
                className="object-contain h-full w-auto max-h-16"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/aipath-crm"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              AIpath CRM
            </Link>
            <Link
              href="/creative-studio"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Creative Studio
            </Link>
            <Link
              href="/social-automation"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Social Automation
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/aipath-crm"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              AIpath CRM
            </Link>
            <Link
              href="/creative-studio"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Creative Studio
            </Link>
            <Link
              href="/social-automation"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              Social Automation
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}