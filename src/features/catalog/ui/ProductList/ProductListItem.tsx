import { FC, ReactNode, useState } from "react"
import { productCategoryData } from "../../api/types.ts"
import cls from './productList.module.scss'
import Modal from "../../../../shared/ui/modal"
import { ProductCard } from "../../index.ts"

interface productListItemProps {
    product: productCategoryData
}

const ProductListItem: FC<productListItemProps> = ({ product }): ReactNode => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return <>
        <article
            className={cls.productListItem}
            onClick={() => setIsModalOpen(true)}
        >
            <div className={cls.imgWrap}>
                <img alt={product.title} src={`images/products/${product.imagePath}`}/>
            </div>
            <div>{product.title}</div>
            <div>от <span>{product.prices[0].price}₽</span></div>
        </article>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <ProductCard product={product} />
        </Modal>
    </>
}

export default ProductListItem