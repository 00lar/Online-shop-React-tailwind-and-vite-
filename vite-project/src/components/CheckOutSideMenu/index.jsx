import { Xicon } from "../Icons"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
return (
    <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-60px)] top-20 flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className=" font-medium">My Order</h2>
            <div
                className="cursor-pointer"
                onClick={() => context.closeCheckoutSideMenu()}>
                <Xicon/>
            </div>
        </div>
    </aside>
)

}

export {CheckoutSideMenu}