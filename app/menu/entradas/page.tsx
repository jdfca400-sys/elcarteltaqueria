"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import NotebookPageFlip from "@/components/NotebookPageFlip"
import Footer from "@/components/Footer"
import Decorations from "@/components/Decorations"
import MenuDrawer from "@/components/MenuDrawer"
import { Button } from "@/components/ui/button"

const menuData = {
    entradas: [
        { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
        { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
        { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
    ],
}

export default function EntradasPage() {
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

            <NotebookPageFlip id="entradas" sectionTitle="Platillos de Entrada" items={menuData.entradas} />

            <Footer />
        </div>
    )
}
