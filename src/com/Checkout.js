// src/pages/Checkout.js
import React, { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("ยืนยันการสั่งซื้อเรียบร้อย ✅");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">ชำระเงิน</h2>

      <div className="mb-3">
        <label className="block">ชื่อผู้รับ</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          className="border w-full p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block">ที่อยู่</label>
        <textarea 
          name="address" 
          value={form.address} 
          onChange={handleChange} 
          className="border w-full p-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block">วิธีชำระเงิน</label>
        <select 
          name="payment" 
          value={form.payment} 
          onChange={handleChange} 
          className="border w-full p-2 rounded"
        >
          <option value="cod">เก็บเงินปลายทาง</option>
          <option value="credit">บัตรเครดิต</option>
          <option value="bank">โอนเงิน</option>
        </select>
      </div>

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        ยืนยันการสั่งซื้อ
      </button>
    </div>
  );
}
