import { FC, ReactNode, useCallback } from "react"
import { productCategory, productDataItem } from "../../api/types.ts"
import cls from "./switcherCategory.module.scss"

interface SwitcherCategoryProps {
    products: productDataItem[],
    activeCategory: productCategory,
    setActiveCategory: (type: productCategory) => void
}

const SwitcherCategory: FC<SwitcherCategoryProps> = ({ products, activeCategory,  setActiveCategory }): ReactNode => {
    const handleCategoryChange = useCallback((type: productCategory) => {
        setActiveCategory(type)
    }, [setActiveCategory])

    return <nav className={cls.switcherCategory}>
        {
            products
                .map(item => {
                    if (item.products.length > 0) return <div
                        key={item.title.alias}
                        onClick={() => handleCategoryChange(item.title.alias)}
                        className={`${cls.category} ${item.title.alias == activeCategory ? cls.active : ''}`}
                    >
                        <img alt={item.title.alias} src={`images/${item.title.imagePath}`} />
                        <div>{item.title.name}</div>
                    </div>
                })
        }
    </nav>
}

export default SwitcherCategory