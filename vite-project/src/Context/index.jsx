import { createContext } from "react";

const ShoppingCartContext = createContexts();

export const ShoppingCartProvider = ({children}) => {
    return (
        <ShoppingCartContext>
            {children}
        </ShoppingCartContext>
    )
}