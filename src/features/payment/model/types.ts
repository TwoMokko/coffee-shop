export enum PaymentMethod {
    CASH = 'cash',
    CARD = 'card',
}

export type PaymentStatus = 'idle' | 'processing' | 'success' | 'failed'