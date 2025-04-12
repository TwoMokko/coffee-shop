import { BrowserRouter, Route, Routes } from "react-router-dom"
import CatalogPage from "../../../../pages/catalog"
import PaymentPage from "../../../../pages/payment"
import VendProcessPage from "../../../../pages/vend"

const Router = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route index element={<CatalogPage />}/>
                <Route path={'/payment/:productId'} element={<PaymentPage />}/>
                <Route path={'/vend/:productId'} element={<VendProcessPage />}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default Router
