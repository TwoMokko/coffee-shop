import { ReactNode } from "react"
import {useVending, VendingProgress} from "../../features/vend"
import { Link, useParams } from "react-router-dom"
import cls from "./ui/vend.module.scss"


const VendProcessPage = (): ReactNode => {
    const { productId } = useParams()
    const { progress, status } = useVending(Number(productId))

    return <section className={cls.vend}>
        <VendingProgress progress={progress} status={status} />
        <Link className={cls.link} to={'/'}>К меню</Link>
    </section>
}

export default VendProcessPage