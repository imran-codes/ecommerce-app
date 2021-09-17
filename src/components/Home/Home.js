import React from 'react'
import {useSelector} from 'react-redux'
import { selectProducts } from '../../reducers/productSlice'
import Product from '../Product/Product'
import {Wrapper, ImageWrapper, ProductWrapper} from './Styles'

function Home() {
   
  const products = useSelector(selectProducts)
  return (
    <Wrapper>
      
      <ImageWrapper>
        <img src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="logo" />
      </ImageWrapper>
      
      <h2>Products</h2>

      <ProductWrapper>
        {products
        // .filter((product) => product.title.toLowerCase().includes('man'))
        .map((product) => (
          <Product 
          key = {product.id}
          id ={product.id}
          image = {product.image}
          description  = {product.description}
          title = {product.title}
          price = {product.price}
          quantity = {product.quantity} 
          />
        ))}
      </ProductWrapper>
    </Wrapper>
  )
}

export default Home

