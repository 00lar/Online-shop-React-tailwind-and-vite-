import { useState } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/card"
import { useEffect } from "react";
import { apiurl } from "../../api";

function Home() {
  const [items,setItems] = useState(null);
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



  
    return (
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item=> (
            <Card
            key={item.id}
            data={item}
            />
          ))
        }
        </div>
      </Layout>
    )
  }

  export {Home}