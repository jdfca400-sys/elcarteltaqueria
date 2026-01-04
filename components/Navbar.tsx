"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

interface NavbarProps {
  onMenuClick?: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const pathname = usePathname()
  const isReservationPage = pathname === "/reservar"
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Advanced scroll detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 50
    if (shouldBeScrolled !== isScrolled) {
      setIsScrolled(shouldBeScrolled)
    }
  })

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d2b2b]/98 backdrop-blur-lg shadow-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-1.5 md:py-2">
          {/* Primera fila: Logo, Navegación y Botones */}
          <div className="flex items-center justify-between min-h-[56px] md:min-h-[72px] relative">
            {/* Logo - Left Side */}
            <motion.div
              className="flex items-center flex-shrink-0 gap-2 md:gap-3 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/">
                <motion.div
                  className="relative w-36 h-10 sm:w-44 sm:h-12 md:w-52 md:h-14 lg:w-64 lg:h-16"
                  style={{ originX: 0 }}
                  whileHover="hover"
                  variants={{
                    top: {
                      scale: 1,
                      y: 0,
                    },
                    hover: {
                      scale: 1.05,
                      filter: "drop-shadow(0 0 12px rgba(0,255,136,0.5))",
                      transition: { duration: 0.2 }
                    }
                  }}
                >
                  <Image
                    src="/logo-el-cartel-taqueria.png"
                    alt="El Cartel Taquería"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </motion.div>
              </Link>

            </motion.div>

            {/* Menu & Contact Buttons - Right Aligned */}
            <motion.div
              className="flex items-center justify-end gap-2 md:gap-2.5 lg:gap-3 px-0.5 md:px-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {!isReservationPage && (
                <Link href="/reservar">
                  <Button
                    className="hidden sm:flex bg-[#00ff88] text-black hover:bg-white hover:text-black font-oswald text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)] items-center gap-1.5 md:gap-2 transition-all hover:scale-105"
                  >
                    👉 Reserva
                  </Button>
                </Link>
              )}
              {isReservationPage ? (
                <Link href="/">
                  <Button
                    className="bg-transparent hover:bg-white/10 text-white font-oswald text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 font-bold flex items-center gap-1.5 md:gap-2 transition-all hover:scale-105 border border-white/20"
                  >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">Volver al comienzo</span>
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={onMenuClick}
                  className="bg-[#00ff88] text-black hover:bg-white hover:text-black font-oswald text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 font-bold shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center gap-1.5 md:gap-2 transition-all hover:scale-105"
                >
                  <Menu className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Menú</span>
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
