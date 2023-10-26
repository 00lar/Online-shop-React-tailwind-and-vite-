import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../components/Layout"
import { Card } from "../../components/card"
import { ProductDetail } from "../../components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext)
  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item=> (
            <Card
            key={item.id}
            data={item}
            />
          ))
        )
      } else {
        return (
          <div>We dont have anithing :(</div>
        )
      }
    } else {
      return (
      context.items?.map(item=> (
        <Card
        key={item.id}
        data={item}
        />
      ))
      )      
    }
  }
  return (
      <Layout>
        <div className="flex items-center justify-center w-80 relative">
            <h1>Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a product"
          className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(e) => context.setSearchByTitle(e.target.value)}
          ></input>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }
        </div>
        <ProductDetail />
      </Layout>
    )
  }

  export {Home}