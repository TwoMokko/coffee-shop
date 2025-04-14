import { FC, ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./choosingPaymentMethod.module.scss"
import { useNavigate } from "react-router-dom"

interface ChoosingPaymentMethodProps {
    onCardPay: () => void,
    onCashPay: () => void
}

const ChoosingPaymentMethod: FC<ChoosingPaymentMethodProps> = ({ onCardPay, onCashPay }): ReactNode => {
    const navigate = useNavigate()

    return <div className={cls.choosingPaymentMethod}>
        <Button className={'secondary'} onClick={() => navigate('/')}>К меню</Button>
        <div className={cls.message}>Выберите способ оплаты</div>
        <div className={cls.btnWrap}>
            <Button
                onClick={onCardPay}
                className={'primary'}
            >
                Картой
            </Button>
            <Button
                onClick={onCashPay}
                className={'primary'}
            >
                Наличыми
            </Button>
        </div>
    </div>
}

export default ChoosingPaymentMethod