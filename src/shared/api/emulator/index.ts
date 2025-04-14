type CashInCallback = (amount: number) => void
type BankCardCallback = (success: boolean) => void
type DisplayCallback = (message: string) => void

let cashInCallback: CashInCallback | null = null
let isCashInActive = false

export const emulator = {
    StartCashin(cb: CashInCallback) {
        if (isCashInActive) {
            console.warn('Прием наличных уже активирован')
            return
        }

        isCashInActive = true
        cashInCallback = cb
        console.log('Купюроприемник активирован. Используйте клавиши 1-5 для внесения денег')

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isCashInActive) return

            const amounts: {[key: string]: number} = {
                '1': 10,
                '2': 50,
                '3': 100,
                '4': 500,
                '5': 1000
            }

            if (amounts[e.key] && cashInCallback) {
                cashInCallback(amounts[e.key])
                console.log(`Внесено: ${amounts[e.key]}₽`)
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        const timeout = setTimeout(() => {
            if (isCashInActive) {
                console.log('Таймаут приема наличных')
                this.StopCashin()
            }
        }, 120000)

        return {
            stop: () => {
                clearTimeout(timeout);
                document.removeEventListener('keydown', handleKeyDown)
            }
        }
    },

    StopCashin() {
        if (!isCashInActive) {
            console.warn('Прием наличных не был активирован')
            return
        }

        isCashInActive = false
        cashInCallback = null
        console.log('Прием наличных остановлен')
    },
    BankCardPurchase(amount: number, cb: BankCardCallback, display_cb: DisplayCallback) {
        let isCancelled = false

        const cancelHandler = () => {
            isCancelled = true
            display_cb('ОПЕРАЦИЯ ОТМЕНЕНА')
            cb(false)
            document.removeEventListener('cancelBankCardOperation', cancelHandler)
        }
        document.addEventListener('cancelBankCardOperation', cancelHandler)

        display_cb('Приложите карту')

        setTimeout(() => {
            if (isCancelled) return
            display_cb('Обработка карты...')

            setTimeout(() => {
                if (isCancelled) return
                // display_cb('Связь с банком...')
                display_cb('Связь с банком... (нажмите enter/esc для отмены)')

                const paymentHandler = (e: KeyboardEvent) => {
                    if (isCancelled) return

                    if (e.key === 'Enter') {
                        display_cb(`Оплачено ${amount} ₽`)
                        cb(true)
                        cleanUp()
                    }
                    else if (e.key === 'Escape') {
                        display_cb('Ошибка оплаты')
                        cb(false)
                        cleanUp()
                    }
                }

                document.addEventListener('keydown', paymentHandler)

                const cleanUp = () => {
                    document.removeEventListener('keydown', paymentHandler)
                    document.removeEventListener('cancelBankCardOperation', cancelHandler)
                }
            }, 1000)
        }, 1000)
    },
    BankCardCancel() {
        console.log('Операция по карте отменена')
        const event = new CustomEvent('cancelBankCardOperation')
        document.dispatchEvent(event)
    },

    activeVendCallbacks: new Set<BankCardCallback>(),
    Vend(product_idx: number, cb: BankCardCallback) {
        console.log(`Начало выдачи напитка #${product_idx}`)

        this.activeVendCallbacks.forEach(cb => {
            this.activeVendCallbacks.delete(cb)
        })

        this.activeVendCallbacks.add(cb)

        let isCompleted = false

        const complete = (success: boolean) => {
            if (isCompleted) return
            isCompleted = true

            clearTimeout(timeoutId)
            document.removeEventListener('keydown', handleKeyPress)
            this.activeVendCallbacks.delete(cb)
            cb(success)
        }

        const timeoutId = setTimeout(() => {
            console.log('Автоподтверждение выдачи')
            complete(true)
        }, 5000)

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                console.log('Выдача напитка подтверждена')
                complete(true)
            }
            else if (e.key === 'Escape') {
                console.log('Выдача напитка отменена')
                complete(false)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return {
            cancel: () => {
                console.log('Процесс выдачи принудительно остановлен')
                complete(false)
            }
        }
    }
}