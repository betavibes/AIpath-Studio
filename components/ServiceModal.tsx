'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: string;
    gradient: string;
    detailedDescription: string;
    features: string[];
    benefits: string[];
    imageUrl: string;
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
          aria-label="Close modal"
        >
          <svg 
            className="w-6 h-6 text-gray-600 group-hover:text-gray-900" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
          
          {/* Icon Badge */}
          <div className="absolute bottom-6 left-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl shadow-xl`}>
              {service.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {service.title}
          </h2>

          {/* Short Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {service.description}
          </p>

          {/* Detailed Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {service.detailedDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    className={`w-6 h-6 mr-3 flex-shrink-0 mt-0.5 text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                >
                  <span className="text-2xl mr-3">✨</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              className={`flex-1 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300`}
            >
              Get Started
            </button>
            <button
              className="flex-1 bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 hover:shadow-lg transition-all duration-300"
              onClick={onClose}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}