import "./styles.css"
import { Xicon } from "../Icons"

const ProductDetail = () => {
return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
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