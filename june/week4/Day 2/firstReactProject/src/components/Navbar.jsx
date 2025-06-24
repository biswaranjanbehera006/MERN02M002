import React from 'react'


function Navbar() {
  return (
    <div>
       <nav className="bg-blue-400 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">MyApp</div>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="hover:text-gray-200 ">Home</a></li>
        <li><a href="#" className="hover:text-gray-200">About</a></li>
        <li><a href="#" className="hover:text-gray-200">Contact</a></li>
      </ul>
      <button className="md:hidden">☰</button>
    </nav>
    </div>
  )
}

export default Navbar
