"use client"; // if using app directory

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-30 px-4 bg-gradient-to-r from-green-600 to-indigo-600 text-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Corporate Services
        </motion.h1>

        <motion.p
          className="text-lg max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          One-stop solution for office maintenance — electrical, plumbing, WiFi, AC & more.
        </motion.p>

        <motion.a
          href="#services"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Service
        </motion.a>
        <div className="mt-6 space-x-4">
</div>

        <a
  href="/booking"
  className="mt-4 inline-block text-white hover:text-gray-200">
  Go to Booking Page →
  </a>

      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Electrical Repairs", emoji: "💡" },
            { title: "Plumbing", emoji: "🚿" },
            { title: "WiFi Installation", emoji: "📶" },
            { title: "AC Maintenance", emoji: "❄️" },
            { title: "Cleaning Services", emoji: "🧹" },
            { title: "Carpentry", emoji: "🪚" },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg shadow hover:shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <div className="text-4xl mb-2">{service.emoji}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

