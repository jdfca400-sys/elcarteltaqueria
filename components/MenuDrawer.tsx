"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

interface MenuDrawerProps {
  menuData: {
    entradas: Array<{ icon: string; title: string; description: string }>
  }
  isOpen: boolean
  onClose: () => void
}

export default function MenuDrawer({ menuData, isOpen, onClose }: MenuDrawerProps) {
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

  const menuSections = [
    { id: "entradas", title: "Entradas", items: menuData.entradas },
  ]

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
            <div className="p-6 space-y-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-oswald text-xl text-gray-400 uppercase tracking-widest border-b border-gray-800 pb-2 mb-4">
                  Categorías
                </h3>

                <Link href="/menu/entradas" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-[#00ff88]/10 border border-gray-800 hover:border-[#00ff88]/50 text-white hover:text-[#00ff88] font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🥗</span>
                    Entradas
                  </Button>
                </Link>

                <Link href="/menu/tacos" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-[#00ff88]/10 border border-gray-800 hover:border-[#00ff88]/50 text-white hover:text-[#00ff88] font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🌮</span>
                    Nuestros Tacos
                  </Button>
                </Link>

                <Link href="/menu/burros" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-orange-500/10 border border-gray-800 hover:border-orange-500/50 text-white hover:text-orange-500 font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🌯</span>
                    Nuestros Burros
                  </Button>
                </Link>

                <Link href="/menu/infantil" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-yellow-500/10 border border-gray-800 hover:border-yellow-500/50 text-white hover:text-yellow-500 font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🧸</span>
                    Menú Infantil
                  </Button>
                </Link>

                <Link href="/menu/shows" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-red-500/10 border border-gray-800 hover:border-red-500/50 text-white hover:text-red-500 font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🎺</span>
                    Shows de Mariachis
                  </Button>
                </Link>

                <Link href="/menu/especialidades" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-purple-500/10 border border-gray-800 hover:border-purple-500/50 text-white hover:text-purple-500 font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🍽️</span>
                    Más Especialidades
                  </Button>
                </Link>

                <Link href="/menu/bebidas" onClick={onClose}>
                  <Button className="w-full justify-start text-left bg-transparent hover:bg-cyan-500/10 border border-gray-800 hover:border-cyan-500/50 text-white hover:text-cyan-500 font-oswald text-xl uppercase tracking-wider py-6 transition-all group">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">🍺</span>
                    Bebidas & Cervezas
                  </Button>
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
