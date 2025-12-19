"use client"

import { Button } from "@/components/ui/button"
import { ReservationData } from "./ReservationWizard"
import { Users } from "lucide-react"

interface StepProps {
    data: ReservationData
    updateData: (fields: Partial<ReservationData>) => void
    onNext: () => void
}

export default function StepPartySize({ data, updateData, onNext }: StepProps) {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sizes.map((size) => (
                <Button
                    key={size}
                    onClick={() => {
                        updateData({ partySize: size })
                        onNext()
                    }}
                    className={`h-24 md:h-32 text-2xl md:text-4xl font-black font-oswald border-2 transition-all hover:scale-105 ${data.partySize === size
                            ? "bg-[#00ff88] text-black border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.4)]"
                            : "bg-transparent text-white border-white/20 hover:border-[#00ff88] hover:text-[#00ff88]"
                        }`}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span>{size}</span>
                        <span className="text-xs md:text-sm font-normal font-sans opacity-60 uppercase tracking-widest">
                            {size === 1 ? "Persona" : "Personas"}
                        </span>
                    </div>
                </Button>
            ))}
            <Button
                onClick={() => {
                    // Handle large groups - for now just set to 9+
                    updateData({ partySize: 9 })
                    onNext()
                }}
                className={`col-span-2 md:col-span-4 h-16 md:h-20 text-lg md:text-xl font-bold font-oswald bg-transparent text-white border-2 border-white/20 hover:border-orange-500 hover:text-orange-500 transition-all uppercase tracking-wider`}
            >
                <Users className="w-5 h-5 mr-3" />
                Más de 8 personas
            </Button>
        </div>
    )
}
