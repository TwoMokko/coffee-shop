import {ReactNode, useMemo} from "react"
import cls from "./ui/payment.module.scss"
import {
    ChoosingPaymentMethod,
    MethodCard,
    MethodCash,
    PaymentMethod,
    PaymentStatus,
    useCardPayment,
    useCashPayment,
    usePayment
} from "../../features/payment"

const PaymentPage = (): ReactNode => {
    const {
        price,
        paymentMethod,
        paymentStatus,
        displayMessage,
        setPaymentMethod,
        setPaymentStatus,
        setDisplayMessage,
        completePayment,
        cancelPayment,
    } = usePayment()

    const { insertedAmount, remainingAmount, handlePayment: handleCashPayment } = useCashPayment(price, completePayment)
    const { handlePayment: handleCardPayment } = useCardPayment(price, completePayment)

    const onCardPay = (): void => {
        setPaymentMethod(PaymentMethod.CARD)
        handleCardPayment(setDisplayMessage)
    }
    const onCashPay = (): void => {
        setPaymentMethod(PaymentMethod.CASH)
        handleCashPayment()
    }

    const renderContent = useMemo((): ReactNode => {
        switch (paymentMethod) {
            case PaymentMethod.CARD:
                return <MethodCard
                    onBack={() => {
                        setPaymentStatus(PaymentStatus.PROCESSING)
                        onCardPay()
                    }}
                    displayMessage={displayMessage}
                    cancelPayment={cancelPayment}
                    paymentStatus={paymentStatus}
                />
            case PaymentMethod.CASH:
                return <MethodCash
                    onBack={() => setPaymentMethod(null)}
                    displayMessage={displayMessage}
                    cancelPayment={cancelPayment}
                    insertedAmount={insertedAmount}
                    remainingAmount={remainingAmount}
                    amount={price}
                />
            default:
                return <ChoosingPaymentMethod
                    onCardPay={onCardPay}
                    onCashPay={onCashPay}
                />
        }
    }, [paymentMethod, displayMessage, insertedAmount, remainingAmount])

    return <section className={cls.wrap}>
        {renderContent}
    </section>
}

export default PaymentPage