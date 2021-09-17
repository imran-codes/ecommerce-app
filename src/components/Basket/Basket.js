import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectBasketTotal, selectItemsCount } from '../../reducers/basketSlice'
import BasketView from '../BasketView/BasketView';
import { Wrapper } from './Styles'

function Basket() {

  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectBasketTotal);
  const totalItemsInBasket = useSelector(selectItemsCount)
  

  return (
    <Wrapper>
      <h1>Your Basket</h1>
      {
        items.length > 0 ? (
          <>
            <p>Total: £{totalPrice.toFixed(2)}</p>
            <p>Total items in your basket: {totalItemsInBasket} </p>

            {items.map(item => (
              <BasketView 
              key = {item.id} 
              title = {item.title}
              price = {item.price}
              id = {item.id} 
              quantity = {item.quantity}/>
            ))}
          </>
        ) : (
          <p>You have no items in your basket</p>
        )
      }
      
    </Wrapper>
  )
}

export default Basket


