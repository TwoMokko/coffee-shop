import { FC, ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./choosingPaymentMethod.module.scss"

interface ChoosingPaymentMethodProps {
    onCardPay: () => void,
    onCashPay: () => void
}

const ChoosingPaymentMethod: FC<ChoosingPaymentMethodProps> = ({ onCardPay, onCashPay }): ReactNode => {
    return <div className={cls.choosingPaymentMethod}>
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