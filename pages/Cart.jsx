import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, setCart } from "../Slice/Menus"// adjust path
import {  useNavigate } from "react-router-dom";


export default function Cart() {
  const cartItems = useSelector((state) => state.MenuInfo.cartlist);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleIncrease(item) {
    dispatch(setCart({ ...item, quantity: 1 }));
  }

  function handleDecrease(item) {
    if (item.quantity > 1) {
      dispatch(setCart({ ...item, quantity: -1 }));
    }
  }

  function handlcheckout(){
    navigate('/checkout');
  }

  

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrease(item)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => handleIncrease(item)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div>
                <button className="rounded mt-0 cursor-pointer" onClick={() => dispatch(deleteCart({ id: item.id }))}>❌</button>
                <p className="font-bold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <h3 className="text-xl font-bold">Total</h3>
            <h3 className="text-xl font-bold text-green-600">
              ₹{totalPrice}
            </h3>
          </div>

          <button className="mt-6 w-full bg-yellow-500 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition" onClick={handlcheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}