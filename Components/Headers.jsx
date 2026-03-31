import React from "react";

import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <header className="flex justify-between items-center mb-10  h-16 rounded-2xl w-[1200px] mx-6 my-4  px-6">

      {/* Logo */}
      <h1 className="text-2xl font-bold  cursor-pointer">
       <Link to="/"> 🍔 MEETOS</Link>
      </h1>

      {/* Nav */}
      <div className="flex flex-row items-center space-x-6">
        <nav >
          <ul className="flex flex-row gap-6">
            <li className="hover:underline hover:text-yellow-500 "><Link to="/">Home</Link></li>
            <li className="hover:underline hover:text-yellow-500 " ><Link to="/menu">Menu</Link></li>
            <li className="hover:underline hover:text-yellow-500 "  ><Link to="/cart">Cart</Link></li>
            <li className="bg-yellow-500 text-black text-decoratio:none rounded font-bold hover:bg-yellow-400 w-20 pl-4"><Link to="/signup">SignUp</Link></li>
          </ul>
        </nav>
        
      </div>

    </header>
  );
}