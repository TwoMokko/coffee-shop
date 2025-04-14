import { productCategoryData } from "../../../../features/catalog/api/types.ts"

export type PaymentRouteParams = {
    productId: string
}

export type PaymentRouteState = {
    product: productCategoryData,
    selectedSize: number
}