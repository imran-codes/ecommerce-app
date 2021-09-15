import React from 'react'
import Product from './Product'
import styled from 'styled-components'

function Home() {
 
  
  
  return (
    <Wrapper>
      
      <ImageWrapper>
        <img src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="logo" />
      </ImageWrapper>
      
      <h2>Products</h2>

      <ProductWrapper>
        <Product 
        id = "767126"
        image = "https://m.media-amazon.com/images/I/71l5tfs95IL._AC_UL320_.jpg"
        description = "Official mens home kit shirt"
        title = "Manchester United Mens Shirt Home Kit 2021/22"
        price = {79.99} />
        <Product 
        id = "4354534"
        image = "https://m.media-amazon.com/images/I/710UA9vAIGS._AC_UX679_.jpg"
        description = "100% Cotton, Regular Fit"
        title = "Italy Football Shirt"
        price = {65} />
        <Product 
        id = "3243234"
        image = "https://m.media-amazon.com/images/I/914Iau8fd2L._AC_UY580_.jpg"
        description = "100% Polyester"
        title = "PUMA Men's Official Shirt Season 20/21 Manchester City Fc Replica With Sponsor Logo Football Shirt"
        price = {75} />
        <Product 
        id = "867867"
        image = "https://m.media-amazon.com/images/I/91wt-m8dvuL._AC_UX679_.jpg"
        description = "Official KOMBAT 2020 men's home jersey made of stretchable material and using HYDRO-WAY PROTECTION technology SKIN FIT"
        title = "SSC NAPOLI Men's Maglia Gara Home 2019/2020 Maglia Gara Home 2019/2020"
        price = {73} />
        <Product 
        id = "9757"
        image = "https://m.media-amazon.com/images/I/41itFtDe9XS._AC_UX679_.jpg"
        description = "Regular fit"
        title = "adidas Men's DFB a JSY T-Shirt"
        price = {60} />
         <Product 
        id = "34233"
        image = "https://m.media-amazon.com/images/I/71-ALBsNxiL._AC_UX679_.jpg"
        description = "Arsenal FC woven club logo"
        title = "adidas Men's Arsenal Fc Away Jersey 2020/21 Shirt"
        price = {80} />



      </ProductWrapper>

     



    </Wrapper>
  )
}

export default Home


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 200px;

  h2 {
    padding: 5px;
    margin-top: 10px;
  }

  @media (max-width: 1416px) {
    margin: 0 100px;
}
@media (max-width: 1220px) {
    margin: 0 10px;
}
`
const ImageWrapper = styled.div`
display: grid;
place-items: center;
width: 100%;
padding: 5px;

img {
  display: grid;
place-items: center;
  object-fit: cover;
  width: 100%;
  max-height: 300px;
}


`

const ProductWrapper = styled.div `

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}

`

