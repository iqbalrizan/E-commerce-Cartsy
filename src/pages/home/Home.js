import React from 'react'
import Category from '../../components/category/Category'
import Hero from '../../components/hero/Hero'
import { Order } from '../../components/hero/Order'
import { Product } from '../../components/products/Product'

const Home = () => {
  return (
    <div>
      <Hero />
      <Order />
      <Category />
      <Product />
      
      

    </div>
  )
}

export default Home