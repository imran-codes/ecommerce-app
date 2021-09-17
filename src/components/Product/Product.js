import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../reducers/basketSlice'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import {Wrapper, ImageWrapper, DetailsWrapper, ButtonsWrapper} from './Styles'

function Product({image, description, title, price, id, quantity}) {

  const dispatch = useDispatch();
  

  const addItem = () => {
    const productToAdd = {
      id, title, price, quantity
    }
    dispatch(addToBasket(productToAdd))
  }

  const truncate = (string, number) => {
    return string?.length > number ? string.substr(0, number -1) + "..." : string;
  }


  return (
    <Wrapper>
      <Link to = {`/details/${id}`}>
      <ImageWrapper>
      <img src={image} alt={title} />
      </ImageWrapper>
      </Link>
      <DetailsWrapper>
        <h3>{truncate(title, 50)}</h3>
        <h4>Price: £{price}</h4>
        <p>{truncate(description, 50)}</p>
        <ButtonsWrapper>
        <Button variant="contained" color="primary" onClick ={addItem}>Add to basket</Button>
      </ButtonsWrapper>
      </DetailsWrapper>
      
    </Wrapper>
  )
}

export default Product

