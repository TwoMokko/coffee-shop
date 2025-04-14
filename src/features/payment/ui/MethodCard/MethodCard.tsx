import { FC, ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./methodCard.module.scss"
import { useNavigate } from "react-router-dom"
import { PaymentStatus } from "../../model/types.ts"

interface MethodCardProps {
    onBack: () => void,
    displayMessage: string,
    cancelPayment: () => void,
    paymentStatus: PaymentStatus
}

const MethodCard: FC<MethodCardProps> = ({ onBack, displayMessage, cancelPayment, paymentStatus }): ReactNode => {
    const navigate = useNavigate()

    return <>
        {
            paymentStatus === 'success' ? (
                <div className={cls.success}>
                    <div className={cls.message}>
                        <img alt={'success'} src={'/images/icons/drink.svg'}/>
                        <div>{displayMessage}</div>
                    </div>
                    <Button onClick={() => navigate('/')} className='primary'>
                        Вернуться в меню
                    </Button>
                </div>
            ) : paymentStatus === 'failed' ? (
                <div className={cls.failed}>
                    <div className={cls.message}>
                        <img alt={'error'} src={'/images/icons/error-payment.svg'}/>
                        <div>{displayMessage}</div>
                    </div>
                    <div className={cls.btnWrap}>
                        <Button onClick={onBack} className='light'>
                            Попробовать снова
                        </Button>
                        <Button onClick={cancelPayment} className='transparentLight'>
                            Отмена
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={cls.methodCard}>
                    <div className={cls.message}>
                        <img alt={'card'} src={'/images/icons/card.png'}/>
                        <div>{displayMessage}</div>
                    </div>
                    <Button onClick={cancelPayment} className='light'>
                        Отмена
                    </Button>
                </div>
            )
        }
    </>
}

export default MethodCard