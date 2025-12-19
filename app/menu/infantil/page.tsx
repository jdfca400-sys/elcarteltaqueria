"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Decorations from "@/components/Decorations"
import MenuDrawer from "@/components/MenuDrawer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const menuData = {
    entradas: [
        { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
        { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
        { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
    ],
}

export default function InfantilPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative z-10 max-w-7xl mx-auto px-5 min-h-screen">
            <Navbar onMenuClick={() => setIsMenuOpen(true)} />

            <MenuDrawer
                menuData={menuData}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <Decorations />

            {/* Spacer for fixed navbar */}
            <div className="h-24 md:h-28 lg:h-32"></div>

            {/* Volver al inicio Button */}
            <div className="flex justify-start mb-8 animate-fade-in-up">
                <Link href="/">
                    <Button variant="outline" className="text-[#00ff88] border-[#00ff88] hover:bg-[#00ff88]/10 font-oswald uppercase tracking-wider">
                        ← Volver al Inicio
                    </Button>
                </Link>
            </div>

            {/* Page Title */}
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-black font-oswald text-white mb-4 uppercase tracking-tighter drop-shadow-lg">
                    Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00cc6a]">Menú</span>
                </h1>
                <div className="h-1 w-24 bg-[#00ff88] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Kids Menu Section */}
            <motion.section
                id="menu-infantil"
                className="py-16 md:py-24 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 inline-block uppercase tracking-tighter drop-shadow-sm animate-pulse"
                    >
                        🧸 Menú Infantil
                    </motion.h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4">
                    <div className="group relative bg-[#1a1a2e]/90 backdrop-blur-md border-2 border-yellow-400/60 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] hover:scale-[1.02]">
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image
                                src="/MENU INFANTIL.png"
                                alt="Menú para Niños - Divertido y Delicioso"
                                fill
                                className="object-contain p-4 transition-transform duration-500 group-hover:rotate-1"
                            />
                        </div>
                        <div className="p-8 text-center bg-gradient-to-t from-black/50 to-transparent">
                            <h3 className="text-3xl font-oswald text-yellow-400 uppercase tracking-wide mb-3">¡Para los Pequeños!</h3>
                            <p className="text-gray-200 text-lg font-light">Comida deliciosa y divertida pensada especialmente para ellos.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}
