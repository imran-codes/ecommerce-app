import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeFromBasket } from '../reducers/basketSlice'
import { Button } from '@material-ui/core';

function BasketView({title, price, id}) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket( {id}  ))
  }

  return (
    <Wrapper>
      <p>{title} - <strong>{price}</strong></p>
      <Button  variant="contained" color="primary" onClick = {removeItemFromBasket}>Remove from basket</Button>
    </Wrapper>
  )
}

export default BasketView

const Wrapper = styled.div `
  padding: 10px 0;

`