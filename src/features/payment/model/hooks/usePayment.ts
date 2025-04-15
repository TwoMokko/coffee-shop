import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { PaymentMethod, PaymentStatus } from "../types"

export const usePayment = () => {
    const { productId } = useParams()
    const { state } = useLocation()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(PaymentStatus.IDLE)
    const [displayMessage, setDisplayMessage] = useState('')

    const completePayment = (success: boolean) => {
        setPaymentStatus(success ? PaymentStatus.SUCCESS : PaymentStatus.FAILED)
        if (success) navigate(`/vend/${productId}`)
    }

    const cancelPayment = () => {
        setPaymentMethod(null)
        setPaymentStatus(PaymentStatus.IDLE)
        setDisplayMessage('')
    }

    return {
        productId,
        product: state?.product,
        price: state?.price,
        paymentMethod,
        paymentStatus,
        displayMessage,
        setPaymentMethod,
        setPaymentStatus,
        setDisplayMessage,
        completePayment,
        cancelPayment
    }
}