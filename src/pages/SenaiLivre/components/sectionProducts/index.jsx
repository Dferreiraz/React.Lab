import { useEffect, useState } from 'react'
import { Card } from "../utils/card" 
import './style.css'
import axios from "axios"

export const SectionProducts = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.error("Erro ao buscar produtos:", err))
  }, [])

  return (
    <section className="senailivre-products-section">
      <h2 className="senailivre-products-title">
        Nossos <span>produtos</span>
      </h2>

      <div className="senailivre-products-grid">
        {products.map((product) => (
          <Card 
            key={product.id}
            image={product.image} 
            descimage={product.title}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}