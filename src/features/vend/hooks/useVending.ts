import { useState, useEffect } from "react"
import { productData } from "../../catalog/api/types.ts"
import { emulator } from "../../../shared/api/emulator"
import { VendingState } from "../model/types.ts"

export const useVending = (productId: productData['id'] | null): VendingState => {
    const [progress, setProgress] = useState<number>(0)
    const [status, setStatus] = useState<string>('приготовление напитка')
    const [isComplete, setIsComplete] = useState<boolean>(false)

    useEffect(() => {
        if (productId) {
            const progressInterval = setInterval(() => {
                setProgress((prev) => {
                    const newValue = prev + 2
                    return newValue > 100 ? 100 : newValue
                })
            }, 100)

            emulator.Vend(productId, (result) => {
                clearInterval(progressInterval)
                setIsComplete(true)
                setStatus(result ? 'Готово!' : 'Ошибка приготовления')
            })

            return () => {
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