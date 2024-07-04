// src/components/HeroSection.js
import React from 'react';
import AppStoreBadge from '../assets/app-store-badge.svg'; // Assuming you have this SVG
import SafariIcon from '../assets/safari-icon.svg'; // Assuming you have this SVG

const HeroSection = () => {
  return (
    <section className="bg-black text-white flex flex-col justify-center h-full p-8 md:p-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Streamline Your Job Application Process with Drop2Fill 
          <img src={SafariIcon} alt="Safari Icon" className="inline-block w-12 h-12 mx-2" /> 
          Extension
        </h1>
        <p className="text-xl mb-8">Simplify and Accelerate Your Job Applications</p>
        <div className="flex justify-center">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={AppStoreBadge} alt="Download on the App Store" className="h-12" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
