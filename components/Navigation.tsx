"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const menuItems = [
  "Entradas",
  "Burros",
  "Tacos",
  "Totopos",
  "Flautas",
  "Quesadillas",
  "Bebidas",
]

export default function Navigation() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="bg-black/70 backdrop-blur-lg rounded-2xl p-5 my-10 shadow-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ul className="flex flex-wrap justify-center gap-4">
        {menuItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className="font-oswald text-lg uppercase tracking-wider text-white hover:text-orange-500 hover:bg-orange-500/20 border border-transparent hover:border-orange-500/50 transition-all duration-300"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </Button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
