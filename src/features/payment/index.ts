import { PaymentMethod, PaymentStatus } from "./model/types.ts"
import ChoosingPaymentMethod from "./ui/ChoosingPaymentMethod/ChoosingPaymentMethod.tsx"
import MethodCard from "./ui/MethodCard/MethodCard.tsx"
import MethodCash from "./ui/MethodCash/MethodCash.tsx"
import { usePayment } from "./model/hooks/usePayment.ts"
import { useCashPayment } from "./model/hooks/useCashPayment.ts"
import { useCardPayment } from "./model/hooks/useCardPayment.ts"

export {
    PaymentMethod,
    PaymentStatus,
    ChoosingPaymentMethod,
    MethodCard,
    MethodCash,
    usePayment,
    useCashPayment,
    useCardPayment
}
