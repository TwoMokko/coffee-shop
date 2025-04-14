import { FC, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"
import cls from './productCard.module.scss'
import { productCategoryData } from "../../api/types.ts"
import Button from "../../../../shared/ui/button"

interface ProductCardProps {
    product: productCategoryData
}

const ProductCard: FC<ProductCardProps> = ({ product }): ReactNode => {
    const navigate = useNavigate()
    const [activeSize, setActiveSize] = useState<number>(product.prices[0].sizeMug)
    const [currentPrice, setCurrentPrice] = useState<number>(product.prices[0].price)

    const handleDoPayment = (): void => {
        navigate(`/payment/${product.id}`, {
            state: {
                product,
                selectedSize: activeSize,
                price: currentPrice
            }
        })
    }

    const handleChangeSizeAndPrice = (item: { price: number, sizeMug: number }): void => {
        setActiveSize(item.sizeMug)
        setCurrentPrice(item.price)
    }

    return <article className={cls.productCard}>
        <div className={cls.content}>
            <img alt={product.title} src={`images/products/${product.imagePath}`} className={cls.picture}/>
            <div className={cls.title}>{product.title}</div>
            <div className={cls.sizes}>
                {
                    product.prices.map((item, index) => <div
                        key={index}
                        className={activeSize == item.sizeMug ? cls.active : ''}
                        onClick={() => handleChangeSizeAndPrice(item)}
                    >
                        <img alt={`size`} src={`images/icons/drink.svg`}/>
                        <div>{item.sizeMug} мл</div>
                    </div>)
                }
            </div>
        </div>
        <Button onClick={handleDoPayment} className={'primary'}>
            <div className={cls.button}>
                <div>Оплатить</div>
                <div className={cls.price}>{currentPrice}₽</div>
            </div>
        </Button>
    </article>
}

export default ProductCard