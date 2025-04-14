export interface productCategoryData {
    id: number,
    title: string,
    prices: { price: number, sizeMug: number }[],
    imagePath: string,
}

export type productDataItem = {
    title: {
        alias: productCategory,
        name: string,
        imagePath: string,
    },
    products: productCategoryData[]
}

export enum productCategory {
    COFFEE = 'coffee',
    TEA = 'tea',
    MILKSHAKE = 'milkshake',
    OTHER = 'other'
}