import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addToBasket } from '../reducers/basketSlice'
import { Button } from '@material-ui/core';

function Product({image, description, title, price, id}) {

  const dispatch = useDispatch();
  

  const addItem = () => {
    const productToAdd = {
      id, title, price
    }
    dispatch(addToBasket(productToAdd))
  }


  return (
    <Wrapper>
      <ImageWrapper>
      <img src={image} alt={title} />
      </ImageWrapper>
      <DetailsWrapper>
        <h3>{title}</h3>
        <h4>Price: £{price}</h4>
        <p>{description}</p>
        <ButtonsWrapper>
        <Button variant="contained" color="primary" onClick ={addItem}>Add to basket</Button>
      </ButtonsWrapper>
      </DetailsWrapper>
      
    </Wrapper>
  )
}

export default Product

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const ImageWrapper = styled.div `
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    padding: 20px;
  }
  
`

const DetailsWrapper = styled.div `
  padding: 10px;

  h3, h4, p {
    padding: 1px 0;
  }
`

const ButtonsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 5px;


`