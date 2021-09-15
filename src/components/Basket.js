import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectBasketTotal } from '../reducers/basketSlice'
import BasketView from './BasketView';
import styled from 'styled-components';

function Basket() {

  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectBasketTotal)

  return (
    <Wrapper>
      <h1>Your Basket</h1>
      <p>Total: £{totalPrice}</p>
      {items.map(item => (
        <BasketView 
        title = {item.title}
        price = {item.price}
        id = {item.id} />
      ))}
    </Wrapper>
  )
}

export default Basket


const Wrapper = styled.div `
  margin: 0 200px;

`
