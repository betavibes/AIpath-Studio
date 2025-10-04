"use client";

import { useState, useEffect } from "react";

export default function StickyDemoCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce">
          <a
            href="/demo"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 font-semibold"
          >
            🚀 Schedule Free Demo
          </a>
        </div>
      )}
    </>
  );
}