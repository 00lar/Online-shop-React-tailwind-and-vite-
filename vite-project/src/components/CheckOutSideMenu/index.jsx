import { Xicon } from "../Icons"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"
import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
return (
    <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} scrollable-cards w-[360px] h-[calc(100vh-60px)] top-20 flex-col fixed right-0 border border-black rounded-lg bg-white `}>
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
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>

    </aside>
)

}

export {CheckoutSideMenu}