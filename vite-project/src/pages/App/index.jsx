import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFoud'
import { SignIn } from '../SignIn'
import { NavBar } from '../../components/navbar'
import { ShoppingCartProvider } from '../../Context'
import { CheckoutSideMenu } from '../../components/CheckOutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:"/",element:<Home/>},
    {path:"/clothes",element:<Home/>},
    {path:"/electronics",element:<Home/>},
    {path:"/furnitures",element:<Home/>},
    {path:"/toys",element:<Home/>},
    {path:"/others",element:<Home/>},
    {path:"/My-Account",element:<MyAccount/>},
    {path:"/My-Order",element:<MyOrder/>},
    {path:"/My-Orders",element:<MyOrders/>},
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    {path:"/SignIn",element:<SignIn/>},
    {path:"/*",element:<NotFound />}
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
        <BrowserRouter>
        <AppRoutes></AppRoutes>
        <NavBar></NavBar>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
