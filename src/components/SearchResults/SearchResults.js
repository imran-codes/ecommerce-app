import React from 'react'
import { addToBasket } from '../../reducers/basketSlice'
import { Button } from '@material-ui/core';
import {useDispatch} from 'react-redux'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {Wrapper, ImageWrapper, DetailsWrapper} from './Styles'

function SearchResults( {id, image, title, price, quantity }) {

    const dispatch = useDispatch();
  

  const addItem = () => {
    const productToAdd = {
      id, title, price, quantity
    }
    dispatch(addToBasket(productToAdd))
  }
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={image} alt={title} />
            </ImageWrapper>
            <DetailsWrapper>
                <p>£{price}</p>
                <Button variant="contained" color="primary" onClick ={addItem}><ShoppingBasketOutlinedIcon/></Button>
                {
                /* set search bar to 0 again */
                }

            </DetailsWrapper>
        </Wrapper>
    )
}

export default SearchResults

