"use client"

import ReservationWizard from "@/components/reservation/ReservationWizard"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Decorations from "@/components/Decorations"
import { useState } from "react"
import MenuDrawer from "@/components/MenuDrawer"

const menuData = {
    entradas: [
        { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
        { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
        { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
    ],
}

export default function ReservarPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-[#00ff88] selection:text-black font-sans">
            <Navbar onMenuClick={() => setIsMenuOpen(true)} />

            <MenuDrawer
                menuData={menuData}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />

            <Decorations />

            {/* Main Content Area */}
            <main className="relative z-10 pt-32 pb-16 flex flex-col items-center justify-center min-h-[90vh]">
                <ReservationWizard />
            </main>

            <Footer />
        </div>
    )
}
