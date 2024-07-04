// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold header-title">Drop2Fill</div>
      </div>
    </header>
  );
};

export default Header;
