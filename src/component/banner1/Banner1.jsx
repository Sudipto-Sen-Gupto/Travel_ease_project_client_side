import React from 'react';
import { motion } from 'framer-motion';
import backgroundImg from './background.avif';
import { Link } from 'react-router';

const Banner1 = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-3xl text-center md:text-left flex gap-6"
        >
          {/* Orange Border */}
          <div className="hidden md:block w-1 bg-orange-500 rounded-full"></div>

          {/* Text Content */}
          <div>
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Travel Ease
            </motion.h1>

            {/* Main Quote */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl font-medium text-orange-400"
            >
              Drive your journey. We’ll handle the rest.
            </motion.p>

            {/* Sub Quote */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 text-base md:text-lg text-gray-200 max-w-xl"
            >
              From city streets to endless highways, Travel Ease offers
              reliable, affordable, and comfortable car rentals designed to
              move you forward—wherever the road takes you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/allvehicles"
                className="rounded-2xl bg-orange-500 px-8 py-3 font-semibold text-black hover:bg-orange-400 transition"
              >
                Explore Cars
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl border border-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition"
              >
               About Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner1;
