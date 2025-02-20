import React from "react";
import { Search } from "lucide-react"; 

const Navbar = () => {
    return (
        <nav className="bg-white  shadow-md py-4 px-6 flex items-center justify-between">
            
            <div className="flex items-center">
                <img src="./logo.png" alt="Logo" className="h-12 w-auto" />
            </div>

            
            <ul className="hidden md:flex space-x-6 text-gray-700 text-sm font-semibold">
                <li className="hover:text-gray-900 cursor-pointer">ENGAGEMENT RINGS</li>
                <li className="hover:text-gray-900 cursor-pointer">WEDDING RINGS</li>
                <li className="hover:text-gray-900 cursor-pointer">DIAMONDS</li>
                <li className="hover:text-gray-900 cursor-pointer">GEMSTONES</li>
                <li className="hover:text-gray-900 cursor-pointer">FINE JEWELRY</li>
                <li className="hover:text-gray-900 cursor-pointer">EDUCATION</li>
                <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
            </ul>

            
            <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none px-2 text-sm"
                />
                <Search className="h-5 w-5 text-gray-600" /> 
            </div>

            
            <button className="md:hidden text-gray-700 text-xl">&#9776;</button>
        </nav>
    );
};

export default Navbar;
