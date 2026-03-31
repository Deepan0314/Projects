import React, { useState } from 'react';
import Order from './Order';

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cash',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center  h-fit bg-white/80">
      <div className="bg-white shadow-xl rounded-lg  border p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
          Order Details
        </h2>

        <div>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Delivery Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          {/* Payment */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option value="cash">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <div className="mt-6">
            <button className="w-full py-3 rounded-lg hover:bg-yellow-500 bg-yellow-600 text-white font-semibold shadow-md transition duration-300 ease-in-out">
              Place Order
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
