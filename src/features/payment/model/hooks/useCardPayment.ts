import { emulator } from "../../../../shared/api/emulator"

export const useCardPayment = (amount: number, onComplete: (success: boolean) => void) => {
    const handlePayment = (displayCallback: (msg: string) => void) => {
        emulator.BankCardPurchase(
            amount,
            onComplete,
            displayCallback
        )
    }

    const cancelPayment = () => {
        emulator.BankCardCancel()
    }

    return {
        handlePayment,
        cancelPayment
    }
}