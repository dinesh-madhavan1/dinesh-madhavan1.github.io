import React from 'react';
import DragDropAnimation from './DragDropAnimation';

const FloatingWindow = () => {
  return (
    <div className="bg-gray-800 p-4 text-white shadow-lg overflow-y-auto">
      <DragDropAnimation />
    </div>
  );
};

export default FloatingWindow;