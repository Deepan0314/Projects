import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../Slice/Menus";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";


export default function MenuCard({ image = "", title, price, rating, id }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  function handlecart() {
    if (count === 0) return;
    dispatch(setCart({
      id,
      title,
      price,
      image,
      quantity: count,
    }));
    toast.success("Item Added", {
      position: "bottom-right",
      theme: "colored",
      autoClose: 1000,
    });

  }

  function handleClick(e) {
    if (e === "+") {
      setCount((count) => count + 1);
    }
    else {
      setCount((count) => {
        return count > 0 ? count - 1 : 0;
      });
    }
  };



  return (
    <div className=" rounded-es-2xl  shadow-md hover:shadow-2xl  w-full gap-6 transition  p-4 bg-[url('../assets/Menubg.jpg')] ">
     <ToastContainer/>
      {/* Food Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl   mb-3"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      {/* Price + Rating */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold">₹{price}</span>
        <span className="text-yellow-500">⭐ {rating}</span>
      </div>

      {/* Quantity */}
      <div className="flex justify-center items-center gap-5 mt-4 backdrop-blur-md bg-white/30 px-5 py-2 rounded-full border border-white/40 ">

        <button
          onClick={() => handleClick("-")}
          disabled={count === 0}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 active:scale-95 transition disabled:opacity-30"
        >
          −
        </button>

        <span className="text-xl font-bold text-gray-900 tracking-wide">
          {count}
        </span>

        <button
          onClick={() => handleClick("+")}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-300 active:scale-95 transition shadow-md"
        >
          +
        </button>

      </div>
      {/* Button */}
      <button
        onClick={handlecart}
        disabled={count === 0}
        className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-400 transition disabled:opacity-30" >
        Add to Cart
      </button>

    </div>
  );
}