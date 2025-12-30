"use client"

import { motion } from "framer-motion"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import MenuSection from "@/components/MenuSection"
import NotebookPageFlip from "@/components/NotebookPageFlip"
import notebookPageFlip from "@/components/NotebookPageFlip"
// import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Decorations from "@/components/Decorations"
import MenuDrawer from "@/components/MenuDrawer"
import HeroCarousel from "@/components/HeroCarousel"
import MenuFeaturedSection from "@/components/MenuFeaturedSection"
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
    <div className="relative min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        <MenuDrawer
          menuData={menuData}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
        <Decorations />

        {/* Espacio para el navbar fijo */}
        <div className="h-24 md:h-28 lg:h-32"></div>

        <div className="mb-20">
          <HeroCarousel />
        </div>

        <div className="my-20">
          <MenuFeaturedSection />
        </div>

        <div className="my-20">
          <MariachiHero />
        </div>
      </div>
      <Footer />
    </div>
  )
}
