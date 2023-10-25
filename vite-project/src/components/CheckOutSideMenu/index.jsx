import { Xicon } from "../Icons"
import { Link } from "react-router-dom"
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
        context.setCount(context.count-1)
      }

    const handleCheckout = () => {  
        const orderToAdd = {
            date: "01.02.23",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
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

        <div className='px-6 flex-1'>
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
        <div className=" px-6 mb-6">
            <p className="flex justify-between items-center mb-2">
                <span className="font-light">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to="/my-orders/last">
            <button
            className=" w-full bg-black py-3 text-white rounded-lg "
             onClick={() => handleCheckout()}>Checkout</button>
            </Link>

        </div>
    </aside>
)
}

export {CheckoutSideMenu}