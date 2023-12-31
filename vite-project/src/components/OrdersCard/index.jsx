import { Xicon, DollarIcon, Calendar, CartIcon } from "../Icons"

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

    
    return(
        <div  className="flex justify-between w-80 items-center mb-3 border border-black p-4 mt-2 b-2 rounded-lg">
            <p className="w-full flex justify-between text-center">
                <span className="flex items-center gap-1"><Calendar/>01.02.23</span>
                <span className="flex items-center gap-1"><CartIcon/>{totalProducts}</span>
                <span className="flex items-center gap-1"><DollarIcon/>${totalPrice}</span>
            </p>

        </div>
    )
}

export {OrdersCard}