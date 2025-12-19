"use client"

import { Button } from "@/components/ui/button"
import { ReservationData } from "./ReservationWizard"

interface StepProps {
    data: ReservationData
    updateData: (fields: Partial<ReservationData>) => void
    onNext: () => void
}

export default function StepTime({ data, updateData, onNext }: StepProps) {
    // Generate simple time slots
    const times = [
        "13:00", "13:30", "14:00", "14:30", "15:00",
        "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
    ]

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {times.map((time) => (
                <Button
                    key={time}
                    onClick={() => {
                        updateData({ time })
                        onNext()
                    }}
                    className={`h-14 text-lg font-bold font-oswald tracking-wider transition-all hover:scale-105 ${data.time === time
                            ? "bg-[#00ff88] text-black shadow-[0_0_15px_rgba(0,255,136,0.4)]"
                            : "bg-white/5 text-white hover:bg-white/20 border border-white/10"
                        }`}
                >
                    {time}
                </Button>
            ))}
        </div>
    )
}
