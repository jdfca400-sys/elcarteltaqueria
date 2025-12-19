"use client"

import { motion } from "framer-motion"

const decorations = [
  { emoji: "🌮", position: "top-10 left-5", size: "text-8xl", rotation: -15 },
  { emoji: "🌶️", position: "top-1/2 right-5", size: "text-6xl", rotation: 15 },
  { emoji: "🥑", position: "bottom-10 left-10", size: "text-5xl", rotation: -10 },
]

export default function Decorations() {
  return (
    <>
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`fixed ${decoration.position} ${decoration.size} opacity-5 pointer-events-none z-0`}
          style={{ transform: `rotate(${decoration.rotation}deg)` }}
          animate={{
            y: [0, -20, 0],
            rotate: [decoration.rotation, decoration.rotation + 5, decoration.rotation],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {decoration.emoji}
        </motion.div>
      ))}
    </>
  )
}
