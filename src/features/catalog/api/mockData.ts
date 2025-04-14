import { productDataItem, productCategory } from "./types.ts"

export const mockProducts: productDataItem[] = [
    {
        title: {
          alias: productCategory.COFFEE, name: 'Кофе', imagePath: 'switcher/coffee.png'
        },
        products: [
            { id: 1, title: "Эспрессо", imagePath: "coffee/espresso.png", prices: [{ price: 100, sizeMug: 200 }, { price: 150, sizeMug: 300 }] },
            { id: 2, title: "Американо", imagePath: "coffee/americano.png", prices: [{ price: 140, sizeMug: 200 }, { price: 200, sizeMug: 300 }, { price: 280, sizeMug: 400 }] },
            { id: 9, title: "Капучино", imagePath: "coffee/cappuccino.png", prices: [{ price: 140, sizeMug: 200 }, { price: 200, sizeMug: 300 }, { price: 280, sizeMug: 400 }] },
            { id: 10, title: "Латте", imagePath: "coffee/latte.png", prices: [{ price: 140, sizeMug: 200 }, { price: 200, sizeMug: 300 }, { price: 280, sizeMug: 400 }] },
            { id: 11, title: "Макиато", imagePath: "coffee/makiato.png", prices: [{ price: 140, sizeMug: 200 }, { price: 200, sizeMug: 300 }, { price: 280, sizeMug: 400 }] },
        ]
    },
    {
        title: {
            alias: productCategory.TEA, name: 'Чай', imagePath: 'switcher/tea.png'
        },
        products: [
            { id: 3, title: "Черный", imagePath: "tea/tea.png", prices: [{ price: 100, sizeMug: 200 }, { price: 150, sizeMug: 300 }, { price: 200, sizeMug: 400 }] },
            { id: 4, title: "Зеленый", imagePath: "tea/tea.png", prices: [{ price: 100, sizeMug: 200 }, { price: 150, sizeMug: 300 }, { price: 200, sizeMug: 400 }] },
        ]
    },
    {
        title: {
            alias: productCategory.MILKSHAKE, name: 'Молочные коктейли', imagePath: 'switcher/milkshake.png'
        },
        products: [
            { id: 5, title: "Банановый", imagePath: "milkshake/milkshake.png", prices: [{ price: 200, sizeMug: 200 }, { price: 290, sizeMug: 400 }] },
            { id: 6, title: "Клубничный", imagePath: "milkshake/milkshake.png", prices: [{ price: 200, sizeMug: 200 }, { price: 290, sizeMug: 400 }] },
            { id: 7, title: "Шоколадный", imagePath: "milkshake/milkshake.png", prices: [{ price: 200, sizeMug: 200 }, { price: 290, sizeMug: 400 }] },
        ],
    },
    {
        title: {
            alias: productCategory.OTHER, name: 'Морсы и газ. напитки', imagePath: 'switcher/other.png'
        },
        products: [
            { id: 8, title: "Морс", imagePath: "other/other.png", prices: [{ price: 200, sizeMug: 200 }, { price: 290, sizeMug: 400 }] },
        ]
    }
]




