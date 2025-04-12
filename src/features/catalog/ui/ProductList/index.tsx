import { FC, ReactNode } from "react"
import { productTypeData } from "../../api/types.ts"
import cls from './productList.module.scss'
import ProductListItem from "./ProductListItem.tsx"

interface ProductListProps {
    products: productTypeData[]
}

const ProductList: FC<ProductListProps> = ({ products }): ReactNode => {
    return <section className={cls.productList}>
        {
            products.map(prod => <ProductListItem product={prod} key={prod.id}/>)
        }
    </section>
}

export default ProductList