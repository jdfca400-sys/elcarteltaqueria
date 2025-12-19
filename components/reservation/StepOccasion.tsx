"use client"

import { Button } from "@/components/ui/button"
import { ReservationData } from "./ReservationWizard"

interface StepProps {
    data: ReservationData
    updateData: (fields: Partial<ReservationData>) => void
    onNext: () => void
}

export default function StepOccasion({ data, updateData, onNext }: StepProps) {
    const occasions = [
        "🎉 Cumpleaños",
        "💑 Aniversario",
        "💼 Reunión de Negocios",
        "👨‍👩‍👧‍👦 Familia",
        "🍻 Con Amigos",
        "✨ Solo porque sí"
    ]

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {occasions.map((occ) => (
                    <Button
                        key={occ}
                        onClick={() => {
                            updateData({ occasion: occ })
                            onNext()
                        }}
                        className={`h-16 text-lg md:text-xl font-bold font-oswald uppercase tracking-wider justify-start px-6 transition-all hover:translate-x-2 ${data.occasion === occ
                                ? "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] border-orange-500"
                                : "bg-transparent text-white border-2 border-white/20 hover:border-orange-500 hover:text-orange-500"
                            }`}
                    >
                        {occ}
                    </Button>
                ))}
            </div>
        </div>
    )
}
