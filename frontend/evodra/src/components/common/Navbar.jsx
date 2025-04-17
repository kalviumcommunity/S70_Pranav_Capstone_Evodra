// src/components/common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white shadow-md">
      <div className="text-2xl font-bold tracking-wider">
        <Link to="/">Evodra</Link>
      </div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-blue-400 transition-colors">
            Products
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-blue-400 transition-colors">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-400 transition-colors">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
