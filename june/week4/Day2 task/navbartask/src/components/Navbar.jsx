import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            Contact Us
          </a>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar
