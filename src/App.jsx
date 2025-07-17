import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FalakBosPortfolio() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-20 bg-black bg-opacity-80 backdrop-blur-sm shadow-sm">
        <ul className="flex justify-center space-x-6 py-4 text-yellow-400 text-lg font-medium">
          <li><a href="#hero" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#reach" className="hover:text-yellow-300">Reach</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10 pt-24">
        <motion.img
          src="/Falak Bos Logo.png"
          alt="Falak Bos Logo"
          className="w-72 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We Move Trade. We Are Falak Bos.
        </motion.h1>

        <motion.p
          className="max-w-xl text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A rising logistics firm specializing in cross-border import/export operations. Powered by technology, precision, and purpose.
        </motion.p>

        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full text-lg">
          Learn More
        </Button>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          At Falak Bos, we simplify global trade by providing reliable logistics solutions. From customs clearance to international freight forwarding, our team ensures your cargo reaches its destination—on time, every time.
        </p>
        <img
          src="/container-ship-6779968.jpg"
          alt="Container Ship at Port"
          className="mx-auto mt-10 rounded-lg shadow-lg max-w-4xl"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black py-16 px-6">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Import Operations",
              desc: "Seamless management of incoming shipments, customs, and inland transport."
            },
            {
              title: "Export Solutions",
              desc: "Helping clients connect to global markets through optimized export strategies."
            },
            {
              title: "Customs Clearance",
              desc: "Speedy documentation, approvals, and release of your cargo."
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-300">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Image Section */}
      <section id="reach" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-10">Our Reach</h2>
        <img
          src="/anastasios-antoniadis-AMXFr97d00c-unsplash.jpg"
          alt="Container Ship at Sea"
          className="mx-auto rounded-lg shadow-lg max-w-5xl"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Let’s move your business forward—reach out to Falak Bos today.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded bg-gray-800 text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white" rows="4"></textarea>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full text-lg">
            Send Message
          </Button>
        </form>
      </section>

      {/* Animated Globe Background */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 z-0 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Rotating_earth_%28large%29.gif/800px-Rotating_earth_%28large%29.gif"
          alt="Animated Globe"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Footer with Tracking Input */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <h3 className="text-xl font-semibold text-yellow-400 mb-4">Track Your Shipment</h3>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            className="px-4 py-2 rounded bg-gray-800 text-white w-64"
          />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full text-lg">
            Track
          </Button>
        </form>
        <p className="mt-6 text-sm">© {new Date().getFullYear()} Falak Bos Logistics. All rights reserved.</p>
      </footer>
    </div>
  );
}