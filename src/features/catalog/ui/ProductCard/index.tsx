import { FC, ReactNode } from "react"
import cls from './productCard.module.scss'
import { productData } from "../../api/types.ts"

interface ProductCardProps {
    product: productData
}

const ProductCard: FC<ProductCardProps> = ({ product }): ReactNode => {
    return <article className={cls.productCard}>
        <h2>{product.title}</h2>
    </article>
}

export default ProductCard