import "./styles.css"
import { Xicon } from "../Icons"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
return (
    <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className=" font-medium">Detail</h2>
            <div>
                <Xicon></Xicon>
            </div>
        </div>
    </aside>
)

}

export {ProductDetail}