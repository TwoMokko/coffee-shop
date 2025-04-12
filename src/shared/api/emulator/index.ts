type CashInCallback = (amount: number) => void
type BankCardCallback = (success: boolean) => void
type DisplayCallback = (message: string) => void

export const emulator = {
    StartCashin(cb: CashInCallback) {
        console.log('Приемник купюр/монет включен, нажмите 1 (50 руб) или 2 (100 руб)')
        document.addEventListener('keydown', e => {
            switch (e.key) {
                case '1': cb(50); break; // при нажатии 1
                case '2': cb(100); break; // при нажатии 2
            }
        })
    },
    StopCashin() {
        console.log('Приемник купюр/монет отключен')
    },
    BankCardPurchase(amount: number, cb: BankCardCallback, display_cb: DisplayCallback) {
        display_cb('Приложите карту')
        setTimeout(() => display_cb('Обработка карты'), 1000)

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                display_cb(`Оплата успешна! списано ${amount} рублей`)
                cb(true)
            } else if (e.key === 'Escape') {
                display_cb('Отмена оплаты')
                cb(false)
            }
        })
    },
    BankCardCancel() {

    },
    Vend(product_idx: number, cb: BankCardCallback) {
        console.log(`Готовим напиток #${product_idx}...`)
        setTimeout(() => cb(true), 10000)
    }
}