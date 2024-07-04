// src/components/DragDropAnimation.js
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const DragDropAnimation = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 6) {
      const timeout = setTimeout(() => {
        setIsDragging(true);
        setTimeout(() => {
          setIsDragging(false);
          setStep(prev => prev + 1);
        }, 1000);
      }, 1000);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setStep(0);
      }, 3000);

      return () => clearTimeout(resetTimeout);
    }
  }, [step]);

  return (
    <div className="container mx-auto p-4 flex justify-center space-x-8">
      {/* Static Form */}
      <div className="mac-window bg-gray-100 p-2 rounded-lg shadow-md w-1/3 h-auto">
        <div className="mac-window-header flex justify-start space-x-2 p-1 bg-gray-200 rounded-t-lg">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="p-2">
          <h2 className="text-lg font-bold mb-4 text-center text-black" style={{ fontFamily: 'Pacifico' }}>Drop2Fill</h2>
          <div className="bg-white p-1 rounded-lg shadow mb-1 text-black relative">
            <label className="block text-xs text-left">First Name</label>
            <input
              type="text"
              value="John"
              className="bg-transparent outline-none block w-full mt-1 text-sm"
              readOnly
            />
            {step === 0 && isDragging && (
              <div className="cursor-pointer absolute top-0 left-0 animate-drag text-black">John</div>
            )}
          </div>
          <div className="bg-white p-1 rounded-lg shadow mb-1 text-black relative">
            <label className="block text-xs text-left">Last Name</label>
            <input
              type="text"
              value="Doe"
              className="bg-transparent outline-none block w-full mt-1 text-sm"
              readOnly
            />
            {step === 1 && isDragging && (
              <div className="cursor-pointer absolute top-0 left-0 animate-drag-down text-black">Doe</div>
            )}
          </div>
          <div className="bg-white p-1 rounded-lg shadow mb-1 text-black relative">
            <label className="block text-xs text-left">Email</label>
            <input
              type="text"
              value="john.doe@example.com"
              className="bg-transparent outline-none block w-full mt-1 text-sm"
              readOnly
            />
            {step === 2 && isDragging && (
              <div className="cursor-pointer absolute top-0 left-0 animate-drag-down text-black">john.doe@example.com</div>
            )}
          </div>
          <div className="bg-white p-1 rounded-lg shadow mb-1 text-black relative">
            <label className="block text-xs text-left">Phone</label>
            <input
              type="text"
              value="123-456-7890"
              className="bg-transparent outline-none block w-full mt-1 text-sm"
              readOnly
            />
            {step === 3 && isDragging && (
              <div className="cursor-pointer absolute top-0 left-0 animate-drag-down text-black">123-456-7890</div>
            )}
          </div>
          <div className="bg-white p-1 rounded-lg shadow mb-1 text-black relative">
            <label className="block text-xs text-left">Address</label>
            <input
              type="text"
              value="123 Main St"
              className="bg-transparent outline-none block w-full mt-1 text-sm"
              readOnly
            />
            {step === 4 && isDragging && (
              <div className="cursor-pointer absolute top-0 left-0 animate-drag-down text-black">123 Main St</div>
            )}
          </div>
          <div className="bg-white p-1 rounded-lg shadow mb-1 text-black relative">
            <label className="block text-xs text-left">City</label>
            <input
              type="text"
              value="Anytown"
              className="bg-transparent outline-none block w-full mt-1 text-sm"
              readOnly
            />
            {step === 5 && isDragging && (
              <div className="cursor-pointer absolute top-0 left-0 animate-drag-down text-black">Anytown</div>
            )}
          </div>
        </div>
      </div>

      {/* Dynamic Form with Animation */}
      <div className="mac-window bg-gray-100 p-2 rounded-lg shadow-md w-2/3 relative h-auto">
        <div className="mac-window-header flex justify-start space-x-2 p-1 bg-gray-200 rounded-t-lg">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-center text-black">Job Application</h2>
          <div className="bg-white p-2 rounded-lg shadow mb-2 text-black relative">
            <label className="block text-xs text-left">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="bg-transparent outline-none block w-full mt-1"
              readOnly
              value={step > 0 ? 'John' : ''}
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow mb-2 text-black relative">
            <label className="block text-xs text-left">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="bg-transparent outline-none block w-full mt-1"
              readOnly
              value={step > 1 ? 'Doe' : ''}
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow mb-2 text-black relative">
            <label className="block text-xs text-left">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none block w-full mt-1"
              readOnly
              value={step > 2 ? 'john.doe@example.com' : ''}
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow mb-2 text-black relative">
            <label className="block text-xs text-left">Phone</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="bg-transparent outline-none block w-full mt-1"
              readOnly
              value={step > 3 ? '123-456-7890' : ''}
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow mb-2 text-black relative">
            <label className="block text-xs text-left">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="bg-transparent outline-none block w-full mt-1"
              readOnly
              value={step > 4 ? '123 Main St' : ''}
            />
          </div>
          <div className="bg-white p-2 rounded-lg shadow mb-2 text-black relative">
            <label className="block text-xs text-left">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="bg-transparent outline-none block w-full mt-1"
              readOnly
              value={step > 5 ? 'Anytown' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDropAnimation;
