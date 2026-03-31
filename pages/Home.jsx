  import React from "react";
  
  import  Button  from "../Components/Button";
  import { motion } from "framer-motion";
  import burger from "../assets/Burger.png";
import CardComponent from "../Components/CardComponent";
import CTA from "../pages/CTA";
import { Link } from "react-router-dom";
  

  export default function FastFoodUI() { 
    return (
      <div className="min-h-screen   p-6">
        
       
    

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 items-center gap-6 mb-16"
        >
          <div className="mb-50 font-bold italic ">
            <h1 className="text-5xl  mb-4 text-slate-950">
              Delicious Food,</h1>  <h1 className="text-5xl  ml-10  text-taupe-500">Delivered Fast 😎
            </h1>
            <p className="text-gray-600 text-xl mt-10">
              Craving something delicious? We brings you freshly prepared, high-quality meals made with the finest ingredients. Enjoy ligh
              tning-fast delivery that gets your favorite food to your doorstep while it’s still hot and tasty.
            </p>
            <Button className="bg-yellow-500 font-sans non-italic inset-shadow-sm inset-shadow-yellow-500/50 mt-6  text-black h-8 px-6  rounded  cursor-pointer hover:bg-yellow-400 animate-bounce">
             <Link to="/menu" >Order Now </Link>
            </Button>
          </div> 
          

          <img
            src={burger}
            alt="food"
            className=" w-full h-[480px] object-cover rotate-2 rounded-xl bg-orange-300  transition duration-300"

          />
        </motion.div>
        
        

        {/* Features */}
        <div className="mb-16 border-t-2 border-avocado-800  ">
          <CardComponent/>
        </div>

       

        {/* CTA */}
        <CTA />
        
       </div>
    );
  };       