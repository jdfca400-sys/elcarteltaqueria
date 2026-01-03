"use client"
import Navbar from "@/components/Navbar"
import FullMenu from "@/components/FullMenu"
import Footer from "@/components/Footer"
import { useState } from "react"
import MenuDrawer from "@/components/MenuDrawer"

export default function MenuPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuData = {
        entradas: [
            { icon: "🥗", title: "Guacamole", description: "Aguacate fresco con cebolla, cilantro y limón" },
            { icon: "🧀", title: "Queso Fundido", description: "Queso derretido con chorizo y chiles" },
            { icon: "🥑", title: "Nachos", description: "Totopos con queso, jalapeños y crema" },
        ],
    }
    return (
        <div className="relative min-h-screen">
            <Navbar onMenuClick={() => setIsMenuOpen(true)} />
            <MenuDrawer
                menuData={menuData}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
            <div className="pt-24 md:pt-32">
                <FullMenu />
            </div>
            <Footer />
        </div>
    )
}
