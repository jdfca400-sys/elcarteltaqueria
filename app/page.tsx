"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import MenuDrawer from "@/components/MenuDrawer"
import HeroCarousel from "@/components/HeroCarousel"
import MenuFeaturedSection from "@/components/MenuFeaturedSection"
import MariachiHero from "@/components/MariachiHero"



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <Navbar onMenuClick={() => setIsMenuOpen(true)} />
        <MenuDrawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />

        {/* Espacio para el navbar fijo */}
        <div className="h-[60px] md:h-[80px]"></div>

        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-80px)] flex flex-col justify-center mb-10 md:mb-20">
          <HeroCarousel />
        </div>

        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-80px)] flex flex-col justify-center">
          <MenuFeaturedSection />
        </div>

        <div className="h-[calc(100vh-60px)] md:h-[calc(100vh-80px)] flex flex-col justify-center mb-12 md:mb-32">
          <MariachiHero />
        </div>
      </div>
      <Footer />
    </div>
  )
}
