import { ReactNode } from "react"
import cls from "./catalogLoading.module.scss"

const CatalogLoading = (): ReactNode => {
    return <div className={cls.catalogLoading}>
        <img alt={'load...'} src={'images/promo.png'} />
    </div>
}

export default CatalogLoading