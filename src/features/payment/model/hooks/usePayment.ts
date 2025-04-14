import { useState } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { PaymentMethod, PaymentStatus } from "../types"

export const usePayment = () => {
    const { productId } = useParams()
    const { state } = useLocation()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle')
    const [displayMessage, setDisplayMessage] = useState('')

    const completePayment = (success: boolean) => {
        setPaymentStatus(success ? 'success' : 'failed')
        if (success) navigate(`/vend/${productId}`)
    }

    const cancelPayment = () => {
        setPaymentMethod(null)
        setPaymentStatus('idle')
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