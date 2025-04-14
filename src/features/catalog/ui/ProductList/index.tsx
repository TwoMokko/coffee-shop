import { FC, ReactNode } from "react"
import { productCategoryData } from "../../api/types.ts"
import cls from './productList.module.scss'
import ProductListItem from "./ProductListItem.tsx"

interface ProductListProps {
    products: productCategoryData[],
    title: string
}

const ProductList: FC<ProductListProps> = ({ products, title }): ReactNode => {
    return <section className={cls.wrap}>
        <h2>{title}</h2>
       <div className={cls.productList}>
           {
               products.map(prod => <ProductListItem product={prod} key={prod.id}/>)
           }
       </div>
    </section>
}

export default ProductList