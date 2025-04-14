import { ReactNode, useMemo } from "react"
import Button from "../../shared/ui/button"
import cls from "./ui/payment.module.scss"
import {
    ChoosingPaymentMethod,
    MethodCard,
    MethodCash,
    PaymentMethod,
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
        setDisplayMessage,
        completePayment,
        cancelPayment,
        navigate
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
                    onBack={() => setPaymentMethod(null)}
                    displayMessage={displayMessage}
                    cancelPayment={cancelPayment}
                />
            case PaymentMethod.CASH:
                return <MethodCash
                    onBack={() => setPaymentMethod(null)}
                    displayMessage={displayMessage}
                    cancelPayment={cancelPayment}
                    insertedAmount={insertedAmount}
                    remainingAmount={remainingAmount}
                />
            default:
                return <ChoosingPaymentMethod
                    onCardPay={onCardPay}
                    onCashPay={onCashPay}
                />
        }
    }, [paymentMethod, displayMessage, insertedAmount, remainingAmount])

    return <section className={cls.wrap}>
        <Button className={'secondary'} onClick={() => navigate('/')}>К меню</Button>
        {
            paymentStatus === 'success' ? (
                <div className={cls.success}>
                    <h3>Оплата прошла успешно!</h3>
                    <div>{displayMessage}</div>
                    <Button onClick={() => navigate('/')} className='primary'>
                        Вернуться в меню
                    </Button>
                </div>
            ) : paymentStatus === 'failed' ? (
                <div className={cls.error}>
                    <div className={cls.message}>{displayMessage}</div>
                    <Button onClick={cancelPayment} className='primary'>
                        Попробовать снова
                    </Button>
                </div>
            ) : (
                <>
                    {renderContent}
                </>
            )
        }
    </section>
}

export default PaymentPage