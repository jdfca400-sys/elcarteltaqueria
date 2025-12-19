"use client"

import { motion } from "framer-motion"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import MenuSection from "@/components/MenuSection"
import NotebookPageFlip from "@/components/NotebookPageFlip"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Decorations from "@/components/Decorations"
import MenuDrawer from "@/components/MenuDrawer"
import HeroCarousel from "@/components/HeroCarousel"
import MariachiHero from "@/components/MariachiHero"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const menuData = {
  entradas: [
    { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
    { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
    { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
  ],

}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Render main content
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-5 min-h-screen">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuDrawer
        menuData={menuData}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <Decorations />

      {/* Espacio para el navbar fijo */}
      {/* Espacio para el navbar fijo */}
      <div className="h-24 md:h-28 lg:h-32"></div>

      <div className="mb-12 md:mb-24">
        <HeroCarousel />
      </div>
      <MariachiHero />

      <ContactSection id="contacto" />
      <Footer />
    </div>
  )
}
