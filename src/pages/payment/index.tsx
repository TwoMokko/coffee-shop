import {ReactNode, useEffect} from "react"
import { useParams } from "react-router-dom"


const PaymentPage = (): ReactNode => {
    const { productId } = useParams()

    useEffect(() => {
        console.log({productId})
    }, [productId])

    return <section>
        payment page
    </section>
}

export default PaymentPage