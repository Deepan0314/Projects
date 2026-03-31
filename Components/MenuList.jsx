import React, { useState } from "react";
import MenuCard from "./MenuCard";
import burger from '../assets/hamburger.svg';
import pizza from '../assets/Veg-pizza.png'
import cola from "../assets/Cola.png";
import sandwich from "../assets/sandwich.png";
import Fries from "../assets/French-Fries.png";
import foods from '../assets/Foods .png';
import { useSelector } from "react-redux";



export default function MenuList() {
  const categories = [
    { name: "all", icon: foods },
    { name: "burger", icon: burger },
    { name: "pizza", icon: pizza },
    { name: "cola", icon: cola },
    { name: "sandwich", icon: sandwich },
    { name: "fries", icon: Fries }
  ];
  const menuData = useSelector((state) => state.MenuInfo.menulist);
  
  const [filtercat, setFiltercat] = useState("all");

  
  function handleClick(category) {
    setFiltercat(category)
  }

  const filterdata = filtercat === "all" ? menuData : menuData.filter((cat) => (cat.category === filtercat));


  return (
    <div className="mt-0">


      <nav className=" backdrop-blur-md bg-yellow-400/80 shadow-md rounded-xl mx-4 mt-2">
        <ul className="flex justify-center items-center gap-8 p-3">

          {categories.map((cat, index) => (
            <li key={index} >
              <button className="p-2 rounded-full bg-white/80 shadow hover:shadow-lg hover:scale-110 transition duration-300 cursor-pointer" onClick={() => handleClick(cat.name)}>
                <img
                  src={cat.icon}
                  alt="food"
                  className="w-10 h-10 rounded-full hover:{cat.icon} hover:animate-bounce"
                />
              </button>
            </li>
          ))}

        </ul>
      </nav>


      <div className="grid md:grid-cols-4 gap-6 w-full p-6 max-w-5xl ml-8">
        {filterdata?.map((cat) => (
          cat.items.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            category={cat.category}
          />
        ))))}
      </div>
    </div>

  );
}