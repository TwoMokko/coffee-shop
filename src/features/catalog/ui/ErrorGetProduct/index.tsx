import { ReactNode } from "react"
import Button from "../../../../shared/ui/button"
import cls from "./errorGetProduct.module.scss"


const ErrorGetProduct = (): ReactNode => {
    return <div className={cls.errorGetProduct}>
        <div>Ошибка</div>
        <Button onClick={() => window.location.reload()} className={'primary'}>
            Попробовать ещё раз
        </Button>
    </div>
}

export default ErrorGetProduct