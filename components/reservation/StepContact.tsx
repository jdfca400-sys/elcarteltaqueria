"use client"

import { Button } from "@/components/ui/button"
import { ReservationData } from "./ReservationWizard"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface StepProps {
    data: ReservationData
    updateData: (fields: Partial<ReservationData>) => void
    onNext: () => void
}

export default function StepContact({ data, updateData }: StepProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-[#00ff88]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
                    <CheckCircle className="w-12 h-12 text-[#00ff88]" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black font-oswald text-white mb-4 uppercase">
                    ¡Reserva Confirmada!
                </h3>
                <p className="text-gray-400 text-lg md:text-xl max-w-md">
                    Te esperamos el <span className="text-[#00ff88] font-bold">{data.date?.toLocaleDateString()}</span> a las <span className="text-[#00ff88] font-bold">{data.time}</span>.
                    <br />
                    Hemos enviado los detalles a {data.email}.
                </p>
                <div className="mt-8">
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="bg-white text-black hover:bg-gray-200 font-oswald font-bold uppercase tracking-widest px-8 py-6 rounded-full"
                    >
                        Volver al Inicio
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-2">
                <label className="text-sm font-oswald uppercase tracking-wider text-gray-400">Nombre Completo</label>
                <Input
                    required
                    value={data.name}
                    onChange={(e) => updateData({ name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white h-14 text-lg focus:border-[#00ff88] focus:ring-[#00ff88]/20"
                    placeholder="Ej. Juan Pérez"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-oswald uppercase tracking-wider text-gray-400">Correo Electrónico</label>
                <Input
                    required
                    type="email"
                    value={data.email}
                    onChange={(e) => updateData({ email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white h-14 text-lg focus:border-[#00ff88] focus:ring-[#00ff88]/20"
                    placeholder="ejemplo@correo.com"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-oswald uppercase tracking-wider text-gray-400">Teléfono</label>
                <Input
                    required
                    type="tel"
                    value={data.phone}
                    onChange={(e) => updateData({ phone: e.target.value })}
                    className="bg-white/5 border-white/10 text-white h-14 text-lg focus:border-[#00ff88] focus:ring-[#00ff88]/20"
                    placeholder="+52 55 1234 5678"
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-[#00ff88] hover:bg-[#00cc6a] text-black font-black font-oswald text-xl uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all hover:scale-[1.02] mt-8 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Confirmando..." : "Confirmar Reserva"}
            </Button>
        </form>
    )
}
