import { useState, useContext, useEffect ,createContext } from "react";
import { apiurl } from "../api";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

  //get Products
  const [items,setItems] = useState(null); 

  //Get Product By Title
  const [searchByTitle, setSearchByTitle] = useState(null) 
  const [filteredItems, setFilteredItems] = useState(null)

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apiurl}/products`)
        const data = await res.json()
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    } 
    fetchData()
  },[])

  const filteredItemsByTitle = (items,searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    }
  },[items,searchByTitle])
    //product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Shopping Card - Order
  const [order, setOrder] = useState([])

  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  })

  const [cartProducts, setCartProducts] = useState([])


    return (
        <ShoppingCartContext.Provider
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            cartProducts,
            setCartProducts,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {ShoppingCartContext}