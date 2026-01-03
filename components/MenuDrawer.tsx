"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface MenuDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  const pathname = usePathname()
  // Cerrar con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])



  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer del menú */}
          <motion.div
            className="fixed top-0 left-0 h-full w-full sm:w-[85%] md:max-w-md bg-black/95 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto border-r border-[#00ff88]/20"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header del drawer */}
            <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-orange-500/30 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <h2 className="font-oswald text-3xl text-orange-500 uppercase tracking-wider">
                  Menú
                </h2>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="text-white hover:text-orange-500 hover:bg-orange-500/20"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Contenido del menú */}
            <div className="p-6 space-y-8">
              <div className="flex flex-col gap-2">
                <h3 className="font-oswald text-xl text-gray-400 uppercase tracking-widest border-b border-gray-800 pb-2 mb-4">
                  Categorías
                </h3>

                <Link href="/menu#entradas" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-[#00ff88] transition-colors border-b border-gray-800/50 group-hover:border-[#00ff88]/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Entradas</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🥗</span>
                  </div>
                </Link>

                <Link href="/menu#tacos" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-[#00ff88] transition-colors border-b border-gray-800/50 group-hover:border-[#00ff88]/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Nuestros Tacos</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🌮</span>
                  </div>
                </Link>

                <Link href="/menu#burros" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-orange-500 transition-colors border-b border-gray-800/50 group-hover:border-orange-500/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Nuestros Burros</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🌯</span>
                  </div>
                </Link>

                <Link href="/menu#infantil" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-yellow-500 transition-colors border-b border-gray-800/50 group-hover:border-yellow-500/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Menú Infantil</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🧸</span>
                  </div>
                </Link>

                <Link href="/menu#shows" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-red-500 transition-colors border-b border-gray-800/50 group-hover:border-red-500/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Shows de Mariachis</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🎺</span>
                  </div>
                </Link>

                <Link href="/menu#especialidades" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-purple-500 transition-colors border-b border-gray-800/50 group-hover:border-purple-500/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Más Especialidades</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🍽️</span>
                  </div>
                </Link>

                <Link href="/menu#bebidas" onClick={onClose} className="block group">
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:text-cyan-500 transition-colors border-b border-gray-800/50 group-hover:border-cyan-500/30">
                    <span className="font-oswald text-xl uppercase tracking-wider">Bebidas & Cervezas</span>
                    <span className="text-xl group-hover:scale-110 transition-transform">🍺</span>
                  </div>
                </Link>

                {pathname !== "/" && (
                  <>
                    <div className="h-px bg-gray-800 my-4"></div>

                    <Link href="/" onClick={onClose}>
                      <Button className="w-full justify-start text-left bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white font-oswald text-lg uppercase tracking-wider py-4 transition-all">
                        ← Volver al Inicio
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
