import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { AddIcon } from "../Icons"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    return(
        <div 
            onClick={()=> context.OpenProductDetail()}
            className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-xl text-black text-xs m-2 px-3 py-0.6">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt="HeadPhone"></img>
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 rounded-full p-1"
                    onClick={()=>context.setCount(context.count+1)}
                    >
                    <AddIcon></AddIcon>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className=" text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export {Card}