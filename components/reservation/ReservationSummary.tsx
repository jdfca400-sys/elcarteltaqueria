"use client"

import type { ReservationData } from "./ReservationWizard"
import { Users, Calendar, Clock, MapPin, RefreshCcw, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format, isValid } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type ReservationSummaryProps = {
    data: ReservationData
    onCorrect: () => void
    className?: string
}

export default function ReservationSummary({ data, onCorrect, className }: ReservationSummaryProps) {

    // Safe date formatting
    const formatDate = (date: any) => {
        if (!date) return null
        const dateObj = date instanceof Date ? date : new Date(date)
        if (!isValid(dateObj)) return null
        try {
            return format(dateObj, "d 'de' MMMM", { locale: es })
        } catch (error) {
            return null
        }
    }

    if (!data) return null

    // Helper to render journey step with consistent visibility
    const JourneyStep = ({
        icon: Icon,
        label,
        value,
        isActive,
        isCompleted,
        className
    }: {
        icon: any,
        label: string,
        value: string | null,
        isActive?: boolean,
        isCompleted?: boolean,
        className?: string
    }) => {
        // ALWAYS visible, visual state depends on completion
        const isFilled = isCompleted || value;

        return (
            <motion.div
                className={cn(
                    "relative flex items-center gap-3 px-3 py-2 md:px-4 md:py-3 rounded-xl border transition-all duration-300 w-full overflow-hidden",
                    isFilled
                        ? "bg-[#00ff88]/10 border-[#00ff88]/30 shadow-[0_0_10px_rgba(0,255,136,0.1)]"
                        : "bg-white/5 border-white/5 opacity-70",
                    className
                )}
            >
                <div className={cn(
                    "flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full transition-colors shrink-0 flex-none relative z-20",
                    isFilled ? "bg-[#00ff88] text-black" : "bg-white/10 text-gray-400"
                )}>
                    <Icon className="w-3 h-3 md:w-4 md:h-4" />
                </div>

                <div className="flex flex-col min-w-0 relative z-10">
                    <span className="text-[10px] uppercase tracking-wider font-oswald text-gray-500 mb-0.5 truncate">
                        {label}
                    </span>
                    <span className={cn(
                        "text-xs md:text-sm font-medium truncate",
                        isFilled ? "text-white" : "text-gray-500 italic"
                    )}>
                        {value || "..."}
                    </span>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "w-full bg-black/80 backdrop-blur-md border border-[#00ff88]/20 rounded-2xl md:rounded-full z-40 p-3 md:p-2 mb-8 shadow-2xl",
                className
            )}
        >
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">

                {/* Steps Container: Grid on Mobile, Flex on Desktop */}
                <div className="w-full grid grid-cols-2 md:flex md:items-center gap-2 md:gap-3">

                    {/* Step 1: Sede */}
                    <JourneyStep
                        icon={MapPin}
                        label="Sede"
                        value="Sede Central"
                        isCompleted={true}
                    />

                    {/* Step 2: Personas */}
                    <JourneyStep
                        icon={Users}
                        label="Personas"
                        value={data.partySize ? `${data.partySize}` : null} // Compact text for mobile
                        isCompleted={!!data.partySize}
                    />

                    {/* Step 3: Fecha */}
                    <JourneyStep
                        icon={Calendar}
                        label="Fecha"
                        value={formatDate(data.date)}
                        isCompleted={!!data.date}
                    />

                    {/* Step 4: Hora */}
                    <JourneyStep
                        icon={Clock}
                        label="Hora"
                        value={data.time}
                        isCompleted={!!data.time}
                    />

                    {/* Step 5: Ocasión (Span 2 on mobile to fit nice) */}
                    <JourneyStep
                        icon={PartyPopper}
                        label="Ocasión"
                        value={data.occasion || null}
                        isCompleted={!!data.occasion}
                        className="col-span-2 md:col-span-1"
                    />

                </div>

                {/* Reset Button - ALWAYS VISIBLE */}
                <Button
                    onClick={onCorrect}
                    variant="ghost"
                    size="sm"
                    className="w-full md:w-auto mt-1 md:mt-0 text-xs text-gray-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-colors border border-dashed border-gray-700 hover:border-[#00ff88]/50 h-10 md:h-full md:aspect-square md:rounded-full flex items-center justify-center p-0 md:px-4"
                >
                    <RefreshCcw className="w-4 h-4 md:mr-0" />
                    <span className="ml-2 md:hidden">Corregir / Reiniciar</span>
                </Button>

            </div>
        </motion.div>
    )
}
