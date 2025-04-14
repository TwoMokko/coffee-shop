import { productDataItem } from "./types.ts"
import { mockProducts } from "./mockData.ts"

export const fetchProducts = (): Promise<productDataItem[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isSuccess ? resolve(mockProducts) : reject(new Error('Ошибка загрузки'))
        }, 1000)
    })
}