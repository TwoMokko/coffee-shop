import { ReactNode, useEffect, useMemo, useState } from "react"
import { productDataItem, productCategory } from "../../features/catalog/api/types.ts"
import { fetchProducts } from "../../features/catalog/api"
import { ProductList } from "../../features/catalog"
import SwitcherCategory from "../../features/catalog/ui/SwitcherCategory"
import cls from "./ui/catalog.module.scss"
import ErrorGetProduct from "../../features/catalog/ui/ErrorGetProduct"
import CatalogLoading from "../../features/catalog/ui/Loading";

const CatalogPage = (): ReactNode => {
    const [products, setProducts] = useState<productDataItem[]>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [activeCategory, setActiveCategory] = useState<productCategory>(productCategory.COFFEE)

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const renderContent = useMemo((): ReactNode => {
        const prod: productDataItem | undefined = products?.find(itm => itm.title.alias === activeCategory)

        if (prod)
            return <ProductList products={prod.products} title={prod.title.name} />
    }, [activeCategory, products])



    if (isLoading)
        return <CatalogLoading />

    if (!products)
        return <ErrorGetProduct />

    return <div className={cls.catalog}>
        <header className={`${cls.header} ${cls[activeCategory]}`}>Выбор напитка</header>
        <SwitcherCategory products={products} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        {renderContent}
    </div>
}

export default CatalogPage