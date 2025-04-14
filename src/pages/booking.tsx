"use client"; // only for app directory

import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

const services = [
  "Electrical Repairs",
  "Plumbing",
  "WiFi Installation",
  "AC Maintenance",
  "Cleaning",
];

export default function BookingPage() {
  const router = useRouter();

  // ✅ Step: Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("❌ You must be logged in to access this page.");
      router.push("/login");
    }
  }, []);
    const [form, setForm] = useState({
    serviceType: "",
    scheduledDate: "",
    address: "",
    specialInstructions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("❌ You must be logged in to book a service.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Booking failed");
        return;
      }
      window.location.href = "/booking-success";
      alert("✅ Booking successful!");
      setForm({ serviceType: "", scheduledDate: "", address: "", specialInstructions: ""  });
    } catch (err) {
      alert("❌ Server error");
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow rounded-xl">
  <h2 className="text-xl font-bold">Book a Service</h2>

  <input
    type="text"
    name="serviceType"
    placeholder="Service Type (e.g., Electrical)"
    value={form.serviceType}
    onChange={handleChange}
    className="w-full border p-2 rounded"
    required
  />

  <input
    type="date"
    name="scheduledDate"
    value={form.scheduledDate}
    onChange={handleChange}
    className="w-full border p-2 rounded"
    required
  />

  <input
    type="text"
    name="address"
    placeholder="Address"
    value={form.address}
    onChange={handleChange}
    className="w-full border p-2 rounded"
    required
  />

  <textarea
    name="specialInstructions"
    placeholder="Special Instructions (optional)"
    value={form.specialInstructions}
    onChange={handleChange}
    className="w-full border p-2 rounded"
  ></textarea>

  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
    Book Now
  </button>
</form>

  );
}
