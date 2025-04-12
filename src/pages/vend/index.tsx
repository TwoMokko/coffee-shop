import { ReactNode } from "react"
import { useVending } from "../../features/vend"
import { useParams } from "react-router-dom"


const VendProcessPage = (): ReactNode => {
    const { productId } = useParams()
    const { progress, status } = useVending(Number(productId))

    return <section>
        <div>{ progress }</div>
        <div>{ status }</div>
    </section>
}

export default VendProcessPage