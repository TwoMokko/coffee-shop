import { useState, useEffect } from "react"
import { productCategoryData } from "../../catalog/api/types.ts"
import { emulator } from "../../../shared/api/emulator"
import { VendingState } from "../model/types.ts"

export const useVending = (productId: productCategoryData['id'] | null): VendingState => {
    const [progress, setProgress] = useState<number>(0)
    const [status, setStatus] = useState<string>('Приготовление напитка')
    const [isComplete, setIsComplete] = useState<boolean>(false)

    useEffect(() => {
        if (productId) {
            const progressInterval = setInterval(() => {
                setProgress(prev => Math.min(prev + 2, 100))
            }, 100)

            const vendProcess = emulator.Vend(productId, (result) => {
                clearInterval(progressInterval)

                if (result) {
                    setProgress(100)
                    setStatus('Напиток готов!')
                } else {
                    setStatus('Ошибка! Повторите попытку.')
                }

                setIsComplete(true)
            })

            return () => {
                vendProcess.cancel()
                clearInterval(progressInterval)
                emulator.BankCardCancel()
            }
        }
    }, [productId])

    return {
        progress,
        status,
        isComplete
    }
}