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
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d2b2b]/98 backdrop-blur-lg border-b border-[#00ff88]/20 shadow-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col py-2 md:py-3">
          {/* Primera fila: Logo, Navegación y Botones */}
          <div className="flex items-center justify-between min-h-[60px] md:min-h-[70px] relative">
            {/* Logo - Left Side */}
            <motion.div
              className="flex items-center flex-shrink-0 gap-2 md:gap-3 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/">
                <motion.div
                  className="relative w-48 h-16 md:w-60 md:h-20 lg:w-72 lg:h-24"
                  style={{ originX: 0 }}
                  animate={isScrolled ? "scrolled" : "top"}
                  whileHover="hover"
                  variants={{
                    top: {
                      scale: 1,
                      y: 0,
                      filter: "drop-shadow(0 0 0px rgba(0,255,136,0))",
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    },
                    scrolled: {
                      scale: 0.88,
                      y: -4,
                      filter: "drop-shadow(0 0 0px rgba(0,255,136,0))",
                      transition: { duration: 0.3 }
                    },
                    hover: {
                      scale: 1.02,
                      filter: "drop-shadow(0 0 8px rgba(0,255,136,0.3))",
                      transition: { duration: 0.2 }
                    },
                    pulse: {
                      filter: ["drop-shadow(0 0 0px rgba(0,255,136,0))", "drop-shadow(0 0 15px rgba(0,255,136,0.6))", "drop-shadow(0 0 0px rgba(0,255,136,0))"],
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <Image
                    src="/EL CARTEL DE LA TAQUERIA logo.png"
                    alt="El Cartel Taquería"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </motion.div>
              </Link>

              <motion.div
                className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00ff88] shadow-lg">
                  <Image
                    src="/catrin-catrina.jpg"
                    alt="Catrin y Catrina - El Cartel Taquería"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Menu & Contact Buttons - Centered/Right */}
            <motion.div
              className="flex items-center justify-end gap-2 md:gap-2.5 lg:gap-3 flex-1 px-4 md:px-0 md:absolute md:left-[42%] md:-translate-x-1/2 md:justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {isReservationPage ? (
                <Link href="/">
                  <Button
                    className="bg-transparent hover:bg-white/10 text-white font-oswald text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-2 md:py-2.5 font-bold flex items-center gap-1.5 md:gap-2 transition-all hover:scale-105 border border-white/20"
                  >
                    <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">Volver al comienzo</span>
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={onMenuClick}
                  className="bg-[#00ff88] hover:bg-[#00cc6a] text-black font-oswald text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-2 md:py-2.5 font-bold shadow-lg flex items-center gap-1.5 md:gap-2 transition-all hover:scale-105"
                >
                  <Menu className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Menú</span>
                </Button>
              )}
              {!isReservationPage && (
                <Link href="/reservar">
                  {/* Updated Reserva Button to match Menu Button style exactly */}
                  <Button
                    className="bg-[#00ff88] hover:bg-[#00cc6a] text-black font-oswald text-xs md:text-sm uppercase tracking-wider px-3 md:px-4 py-2 md:py-2.5 font-bold shadow-lg flex items-center gap-1.5 md:gap-2 transition-all hover:scale-105"
                  >
                    Reserva
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
