import { ReactNode } from "react"
import { useVending, VendingProgress } from "../../features/vend"
import { Link, useParams } from "react-router-dom"
import cls from "./ui/vend.module.scss"


const VendProcessPage = (): ReactNode => {
    const { productId } = useParams()
    const { progress, status } = useVending(Number(productId))

    return <>
        {
            status == 'Напиток готов!'
                ? <div className={cls.success}>
                    <div className={cls.message}>
                        <img alt={'card'} src={'/images/icons/drink.svg'}/>
                        <div>{status}</div>
                    </div>
                    <Link className={cls.link} to={'/'}>К меню</Link>
                </div>
                : <div className={cls.vend}>
                    <VendingProgress progress={progress} status={status}/>
                    <Link className={cls.link} to={'/'}>К меню</Link>
                </div>
        }
    </>
}

export default VendProcessPage