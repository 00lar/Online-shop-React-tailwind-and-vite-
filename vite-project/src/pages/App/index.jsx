import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFoud'
import { SignIn } from '../SignIn'

function App() {
  return (
    <div className=' bg-red-500'>
      <Home></Home>
      <MyAccount></MyAccount>
      <MyOrder></MyOrder>
      <MyOrders></MyOrders>
      <NotFound></NotFound>
      <SignIn></SignIn>
    </div>
  )
}

export default App
