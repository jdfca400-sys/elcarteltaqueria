"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, Palmtree } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReservationData } from "./ReservationWizard"

type StepSedeProps = {
    data: ReservationData
    updateData: (fields: Partial<ReservationData>) => void
    onNext: () => void
}

export default function StepSede({ data, updateData, onNext }: StepSedeProps) {
    const sedes = [
        {
            id: "sede-norte",
            name: "Sede Norte",
            description: "Ambiente familiar y terraza",
            icon: Building2,
            image: "bg-gradient-to-br from-purple-900 to-black"
        },
        {
            id: "sede-sur",
            name: "Sede Sur",
            description: "Show en vivo y bar",
            icon: Palmtree,
            image: "bg-gradient-to-br from-orange-900 to-black"
        }
    ]

    const handleSelect = (sedeName: string) => {
        updateData({ sede: sedeName })
        // Small delay to show selection before moving next
        setTimeout(() => {
            onNext()
        }, 300)
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {sedes.map((sede) => {
                    const isSelected = data.sede === sede.name
                    const Icon = sede.icon

                    return (
                        <motion.button
                            key={sede.id}
                            onClick={() => handleSelect(sede.name)}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                "relative group overflow-hidden rounded-2xl border-2 text-left transition-all duration-300 h-40 md:h-52 flex flex-col justify-end p-6",
                                isSelected
                                    ? "border-[#00ff88] shadow-[0_0_30px_rgba(0,255,136,0.3)]"
                                    : "border-gray-800 hover:border-[#00ff88]/50"
                            )}
                        >
                            {/* Background & Overlay */}
                            <div className={cn("absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60", sede.image)} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                            {/* Content */}
                            <div className="relative z-20">
                                <Icon className={cn(
                                    "w-8 h-8 md:w-10 md:h-10 mb-3 transition-colors duration-300",
                                    isSelected ? "text-[#00ff88]" : "text-gray-400 group-hover:text-white"
                                )} />
                                <h3 className={cn(
                                    "text-xl md:text-2xl font-oswald uppercase tracking-wide mb-1 transition-colors duration-300",
                                    isSelected ? "text-[#00ff88]" : "text-white"
                                )}>
                                    {sede.name}
                                </h3>
                                <p className="text-gray-400 text-sm font-light">
                                    {sede.description}
                                </p>
                            </div>

                            {/* Selection Indicator */}
                            {isSelected && (
                                <motion.div
                                    layoutId="selected-sede"
                                    className="absolute top-4 right-4 z-20 bg-[#00ff88] text-black w-6 h-6 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                                >
                                    <MapPin className="w-3 h-3" />
                                </motion.div>
                            )}
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )
}
