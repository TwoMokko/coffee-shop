import {ReactNode, useCallback, useEffect, useMemo, useState} from "react"
import { productData, productType } from "../../features/catalog/api/types.ts"
import { fetchProducts } from "../../features/catalog/api"
import { ProductList } from "../../features/catalog"

const CatalogPage = (): ReactNode => {
    const [products, setProducts] = useState<productData>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [activeProduct, setActiveProduct] = useState<productType>(productType.COFFEE)

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
        if (products)
            return <ProductList products={products[activeProduct]} />
    }, [activeProduct, products])

    const handleTypeChange = useCallback((type: keyof productData) => {
        setActiveProduct(type)
    }, [])

    if (isLoading)
        return <div>Загрузка...</div>

    if (!products)
        return <div>Продукция не найдена</div>

    return <div>
        <div>
            {
                Object.keys(products)
                    .map(type => {
                        if (products[type as keyof productData].length > 0) return <div
                            key={type}
                            onClick={() => handleTypeChange(type as keyof productData)}>
                            {type}
                        </div>
                    })
            }
        </div>
        { renderContent }
    </div>
}

export default CatalogPage