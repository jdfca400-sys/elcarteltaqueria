"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-2xl font-bold mb-4 font-oswald uppercase">
                Algo salió mal
            </h2>
            <p className="text-gray-400 mb-8 max-w-md text-center">
                Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
            </p>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                variant="default"
                className="bg-[#00ff88] text-black hover:bg-[#00cc6a]"
            >
                Intentar de nuevo
            </Button>
        </div>
    )
}
