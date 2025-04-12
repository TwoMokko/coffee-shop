import {productData, productType} from "./types.ts"

export const mockProducts: productData = {
    [productType.COFFEE]: [
        { id: 1, title: "Эспрессо", price: 100, imagePath: "coffee/latte.jpg" },
        { id: 2, title: "Капучино", price: 150, imagePath: "coffee/cappuccino.jpg" },
    ],
    [productType.TEA]: [
        { id: 1, title: "Черный", price: 100, imagePath: "tea/black.png" },
        { id: 2, title: "Зеленый", price: 150, imagePath: "tea/green.png" },
    ],
    [productType.MILKSHAKE]: [
        { id: 1, title: "Классический", price: 100, imagePath: "milkshake/classic.png" },
        { id: 2, title: "Клубничный", price: 150, imagePath: "milkshake/strawberry.png" },
        { id: 3, title: "Шоколадный", price: 120, imagePath: "milkshake/choco.png" },
    ],
    [productType.OTHER]: [

    ]
}