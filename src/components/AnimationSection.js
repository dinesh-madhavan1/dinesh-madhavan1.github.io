// src/components/AnimationSection.js
import React from 'react';
import DragDropAnimation from './DragDropAnimation';
import HeroSection from './HeroSection';

const AnimationSection = () => {
  return (
    <section className="bg-black py-16 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex justify-center items-center p-8 md:p-16">
        <HeroSection />
      </div>
      <div className="md:w-1/2 p-8 md:p-16">
        <DragDropAnimation />
      </div>
    </section>
  );
};

export default AnimationSection;
