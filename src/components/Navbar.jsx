import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-sky-800 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/800px-Open_book_nae_02.svg.png" alt="Logo" className="h-8 w-8 mr-2" />

        <span className="text-white font-semibold text-lg">Shop</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li>
          <NavLink to="/" className="text-white hover:text-green-400">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white hover:text-green-400">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white hover:text-green-400">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar