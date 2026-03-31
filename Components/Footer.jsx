import React from "react";

import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#0B3D2E]  position:fixed bottom:0 flex flex-col text-white w-full mt-16 rounded p-8">
      
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">🍔 MEETOS</h2>
          <p className="text-sm text-gray-300">
            Delivering delicious food with speed and quality. 
            Experience the best meals at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div >
          
          <h3 className="text-xl  ">Navigations</h3>
          <ul className="space-x-8 text-gray-300 ">
            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/menu">Menu</Link></li>
            <li className="hover:text-white cursor-pointer"><Link to="/cart">Cart</Link></li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div >
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-300"> Chennai, India</p>
          <p className="text-gray-300"> "Contact</p>
          <p className="text-gray-300"> support@meetos.com</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2026 MEETOS. All rights reserved.
      </div>
    </footer>
  );
}