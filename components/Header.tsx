"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="text-center py-10 mb-16 relative z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="font-oswald text-6xl md:text-7xl font-bold text-orange-500 uppercase tracking-widest mb-3 relative z-10"
        style={{
          textShadow: `
            3px 3px 0px #ff6b00,
            6px 6px 0px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(255, 69, 0, 0.5)
          `,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        El Cartel Taquería
      </motion.h1>
      <motion.p
        className="font-oswald text-xl md:text-2xl text-orange-400 tracking-widest"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Auténtico Sabor Mexicano
      </motion.p>
    </motion.header>
  )
}
