import { FC, ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./methodCash.module.scss"

interface MethodCashProps {
    onBack: () => void,
    displayMessage: string,
    cancelPayment: () => void,
    insertedAmount: number,
    remainingAmount: number,
    amount: number
}

const MethodCash: FC<MethodCashProps> = ({ onBack, displayMessage, cancelPayment, insertedAmount, amount }): ReactNode => {
    // const overMoney = (insertedAmount - amount) < 0 ? '' : `${insertedAmount - amount}₽`

    return <div className={cls.methodCash}>
        <div className={cls.message}>
            <div>{displayMessage}</div>
            <div>
                <div>Внесено: {insertedAmount}₽</div>
                <div>Нужно внести: {amount}₽</div>
                {/*<div>Осталось внести: {remainingAmount}₽</div>*/}
                {/*<div>Ваша сдача: {overMoney}</div>*/}
            </div>
            <div>Нажмите 1 (10₽), 2 (50₽), 3 (100₽), 4 (500₽), 5 (1000₽) на клавиатуре</div>
        </div>
        <div className={cls.btnWrap}>
            <Button className='secondary' onClick={onBack}>
                Выбрать другой способ оплаты
            </Button>
            <Button onClick={cancelPayment} className='primary'>
                Отмена оплаты
            </Button>
        </div>
    </div>
}

export default MethodCash