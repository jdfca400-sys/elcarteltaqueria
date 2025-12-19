"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ReservationData } from "./ReservationWizard"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface StepProps {
    data: ReservationData
    updateData: (fields: Partial<ReservationData>) => void
    onNext: () => void
}

export default function StepDate({ data, updateData, onNext }: StepProps) {
    const [currDate, setCurrDate] = useState(new Date())

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay()
    }

    const changeMonth = (offset: number) => {
        const newDate = new Date(currDate.getFullYear(), currDate.getMonth() + offset, 1)
        if (newDate >= new Date(new Date().getFullYear(), new Date().getMonth(), 1)) {
            setCurrDate(newDate)
        }
    }

    const renderCalendar = () => {
        const year = currDate.getFullYear()
        const month = currDate.getMonth()
        const daysInMonth = getDaysInMonth(year, month)
        const firstDay = getFirstDayOfMonth(year, month)
        const days = []

        // Empty slots for days before start of month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 md:h-14"></div>)
        }

        const today = new Date()
        const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year

        for (let day = 1; day <= daysInMonth; day++) {
            const dateObj = new Date(year, month, day)
            const isToday = isCurrentMonth && day === today.getDate()
            const isPast = isCurrentMonth && day < today.getDate()
            const isSelected = data.date?.getDate() === day && data.date?.getMonth() === month && data.date?.getFullYear() === year

            days.push(
                <button
                    key={day}
                    disabled={isPast}
                    onClick={() => {
                        updateData({ date: dateObj })
                        // Small delay to show selection before moving next
                        setTimeout(onNext, 200)
                    }}
                    className={`
                        h-10 md:h-14 w-full rounded-lg text-sm md:text-lg font-bold transition-all relative
                        ${isSelected
                            ? "bg-[#00ff88] text-black shadow-[0_0_15px_rgba(0,255,136,0.4)] scale-110 z-10"
                            : "hover:bg-white/10 text-white"}
                        ${isPast ? "opacity-20 cursor-not-allowed" : ""}
                        ${isToday ? "border border-[#00ff88]/50" : ""}
                    `}
                >
                    {day}
                    {isToday && <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00ff88] rounded-full"></div>}
                </button>
            )
        }
        return days
    }

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    return (
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-oswald uppercase text-white tracking-widest">
                    {monthNames[currDate.getMonth()]} {currDate.getFullYear()}
                </h3>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => changeMonth(-1)}>
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => changeMonth(1)}>
                        <ChevronRight className="w-5 h-5 text-white" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center">
                {["D", "L", "M", "M", "J", "V", "S"].map((day, i) => (
                    <div key={i} className="text-xs md:text-sm font-oswald text-gray-500 uppercase">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 md:gap-2">
                {renderCalendar()}
            </div>
        </div>
    )
}
