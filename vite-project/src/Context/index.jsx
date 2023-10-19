import { useState } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count,setCount] = useState(0)
    console.log(count)
    return (
        <ShoppingCartContext.Provider
        value={{
            count,
            setCount,
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext}