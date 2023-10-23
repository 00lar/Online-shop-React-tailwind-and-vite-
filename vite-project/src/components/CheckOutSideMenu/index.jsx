import { Xicon } from "../Icons"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
        console.log("Hola")
      }



return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} scrollable-cards w-[360px] h-[calc(100vh-60px)] top-20 flex-col fixed right-0 border border-black rounded-lg bg-white `}>
        <div className="flex justify-between items-center p-6">
            <h2 className=" font-medium">My Order</h2>
            <div
                className="cursor-pointer"
                onClick={() => context.closeCheckoutSideMenu()}>
                <Xicon/>
            </div>
        </div>

        <div className='px-6'>
            {
            context.cartProducts.map(product => (
                <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
                handleDelete={handleDelete}
                />
            ))
            }
        </div>
        <div className=" px-6">
            <p className="flex justify-between items-center">
                <span className="font-light">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
            </p>
        </div>
    </aside>
)
}

export {CheckoutSideMenu}