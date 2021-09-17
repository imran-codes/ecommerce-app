import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../reducers/basketSlice'
import { Button } from '@material-ui/core';
import { Container  , Wrapper , ImageWrapper , DetailsWrapper , ButtonsWrapper} from './Styles'

function DetailResult({ id, quantity, image , description ,title , price }) {
    const dispatch = useDispatch();
  

  const addItem = () => {
    const productToAdd = {
      id, title, price, quantity
    }
    dispatch(addToBasket(productToAdd))
  }

  return (
        <Container>
            <Wrapper>
                <ImageWrapper>
                    <img src={image} alt={title} />
                </ImageWrapper>
                <DetailsWrapper>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h5>Price: £{price}</h5>
                    <ButtonsWrapper>
                        <Button variant="contained" color="primary" onClick ={addItem}>Add to basket</Button>
                    </ButtonsWrapper>
                </DetailsWrapper>
            </Wrapper>
        </Container>
    )
}

export default DetailResult

