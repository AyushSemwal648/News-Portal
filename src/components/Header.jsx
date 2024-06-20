import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaPinterest, FaLinkedin, FaEnvelope, FaSearch } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-gray-100 p-2 font-[popins] border m-1">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MdDateRange className="text-lg" />
          <span>{currentDate}</span>
          
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700"><FaFacebookF /></a>
          <a href="#" className="text-gray-700"><FaTwitter /></a>
          <a href="#" className="text-gray-700"><FaGoogle /></a>
          <a href="#" className="text-gray-700"><FaInstagram /></a>
          <a href="#" className="text-gray-700"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
