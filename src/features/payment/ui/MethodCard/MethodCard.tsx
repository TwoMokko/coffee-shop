import { FC, ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./methodCard.module.scss"

interface MethodCardProps {
    onBack: () => void,
    displayMessage: string,
    cancelPayment: () => void
}

const MethodCard: FC<MethodCardProps> = ({ onBack, displayMessage, cancelPayment }): ReactNode => {
    return <div className={cls.methodCard}>
        <Button className='secondary' onClick={onBack}>выбрать другой способ оплаты</Button>
        <div className={cls.message}>{displayMessage}</div>
        <Button onClick={cancelPayment} className='primary'>
            Отмена оплаты
        </Button>
    </div>
}

export default MethodCard