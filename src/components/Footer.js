import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-gray-400">&copy; 2023 Drop2Fill. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="privacy-policy.html" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
