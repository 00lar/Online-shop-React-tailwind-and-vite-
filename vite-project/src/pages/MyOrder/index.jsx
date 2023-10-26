import { Layout } from "../../components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../components/OrderCard"
import { ArrowLeftIcon } from "../../components/Icons"
import { Link } from "react-router-dom"

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
      <Layout>
        <div className="flex items-center justify-center w-80 relative mb-2">
          <Link to={"/My-orders"} className="absolute left-0">
            <ArrowLeftIcon/>
          </Link>
          <h1>My Order</h1>
        </div>

        <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
        </div>
      </Layout>
  )
  }

  export {MyOrder}