import { FC, ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./methodCash.module.scss"

interface MethodCashProps {
    onBack: () => void,
    displayMessage: string,
    cancelPayment: () => void,
    insertedAmount: number,
    remainingAmount: number
}

const MethodCash: FC<MethodCashProps> = ({ onBack, displayMessage, cancelPayment, insertedAmount, remainingAmount }): ReactNode => {
    return <div className={cls.methodCash}>
        <Button className='secondary' onClick={onBack}>выбрать другой способ оплаты</Button>
        <div className={cls.message}>
            <div>{displayMessage}</div>
            <div>
                <div>Внесено: {insertedAmount}₽</div>
                <div>Осталось внести: {remainingAmount}₽</div>
            </div>
            <div>Нажмите 1 (10₽), 2 (50₽), 3 (100₽), 4 (500₽), 5 (1000₽) на клавиатуре</div>
        </div>
        <Button onClick={cancelPayment} className='primary'>
            Отмена оплаты
        </Button>
    </div>
}

export default MethodCash