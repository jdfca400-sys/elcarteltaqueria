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

export default function BurrosPage() {
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

            {/* Burros Menu Gallery Section */}
            <motion.section
                id="menu-burros"
                className="py-16 md:py-24 relative bg-black/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black font-oswald text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 inline-block uppercase tracking-tighter drop-shadow-sm"
                    >
                        Nuestros Burros
                    </motion.h2>
                    <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
                    <div className="group relative border border-orange-500/40 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/BURROS 1.png"
                                alt="Burros Gigantes"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-oswald text-orange-500 uppercase tracking-wide mb-2">Burros Gigantes</h3>
                            <p className="text-gray-300 text-sm md:text-base font-light">Grandes, sabrosos y llenos de sabor auténtico.</p>
                        </div>
                    </div>
                    <div className="group relative border border-orange-500/20 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/BURROS 2 .png"
                                alt="Especialidad de la Casa"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-oswald text-orange-500 uppercase tracking-wide mb-2">Especialidad</h3>
                            <p className="text-gray-300 text-sm md:text-base font-light">Nuestra receta especial que te encantará.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}
