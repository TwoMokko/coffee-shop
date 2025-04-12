export interface productTypeData {
    id: number,
    title: string,
    price: number,
    imagePath: string
}

export type productData = {
    [key in productType]: productTypeData[]
}

export enum productType {
    COFFEE = 'coffee',
    TEA = 'tea',
    MILKSHAKE = 'milkshake',
    OTHER = 'other'
}