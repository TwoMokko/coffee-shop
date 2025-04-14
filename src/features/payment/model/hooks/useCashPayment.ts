import { useState } from "react"
import { emulator } from "../../../../shared/api/emulator"

export const useCashPayment = (price: number, onComplete: (success: boolean) => void) => {
    const [insertedAmount, setInsertedAmount] = useState(0)
    const [remainingAmount, setRemainingAmount] = useState(price)

    const handlePayment = () => {
        emulator.StartCashin((amount) => {
            const newAmount = insertedAmount + amount
            setInsertedAmount(newAmount)
            setRemainingAmount(Math.max(0, price - newAmount))

            if (newAmount >= price) {
                emulator.StopCashin()
                onComplete(true)
            }
        })
    }

    const cancelPayment = () => {
        emulator.StopCashin()
    }

    return {
        insertedAmount,
        remainingAmount,
        handlePayment,
        cancelPayment
    }
}