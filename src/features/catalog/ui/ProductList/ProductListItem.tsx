import { FC, ReactNode } from "react"
import cls from './productList.module.scss'
import { productTypeData } from "../../api/types.ts"

interface productListItemProps {
    product: productTypeData
}

const ProductListItem: FC<productListItemProps> = ({ product }): ReactNode => {
    return <article className={cls.productListItem}>
        <img alt={product.title} src={`/img/products/${product.imagePath}`}/>
        <h2>{ product.title }</h2>
        <div>{ product.price }₽</div>
    </article>
}

export default ProductListItem