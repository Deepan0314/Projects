import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
    
    
    const cartItems = useSelector((state) => state.MenuInfo.cartlist);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        
            <div className=" shadow-2xl bg-white/80 rounded-lg p-6 w-full   max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Order Summary</h2>
                
                <div className="space-y-6 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100">
                    {cartItems && cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-3">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.image}
                                    alt="food"
                                    className="rounded-full w-14 h-14 shadow-md border border-gray-200"
                                />
                                <div>
                                    <p className="font-semibold text-gray-700">{item.title}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <p className="font-bold text-yellow-600">₹{item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-4">
                        <span>Total</span>
                        <span>₹{totalPrice.toFixed(2)}</span>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default Order
