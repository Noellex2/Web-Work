// src/pages/Cart.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "สินค้า A", price: 100, qty: 1 },
    { id: 2, name: "สินค้า B", price: 200, qty: 2 },
  ]);

  const updateQty = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: type === "add" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div>
            <p>{item.name}</p>
            <p>{item.price} บาท</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 bg-gray-200 rounded" onClick={() => updateQty(item.id, "remove")}>-</button>
            <span>{item.qty}</span>
            <button className="px-2 bg-gray-200 rounded" onClick={() => updateQty(item.id, "add")}>+</button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">รวมทั้งหมด: {total} บาท</h3>
      </div>
      <button 
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => navigate("/checkout")}
      >
        ชำระเงิน
      </button>
    </div>
  );
}
