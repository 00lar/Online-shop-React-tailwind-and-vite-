import { useState } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count,setCount] = useState(0)
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)
    const OpenProductDetail = () => setIsProductDetailOpen(true)
    const CloseProductDetail = () => setIsProductDetailOpen(false)
    return (
        <ShoppingCartContext.Provider
        value={{
            count,
            setCount,
            OpenProductDetail,
            CloseProductDetail,
            isProductDetailOpen
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext}