import React from 'react'
import {useSelector} from 'react-redux'
import { selectProducts } from '../../reducers/productSlice'
import DetailResult from '../DetailsResult/DetailResult'
import { useParams } from 'react-router-dom'
import {Wrapper , DetailsWrapper} from './Styles'


function Details() {

    const params = useParams();
    console.log(params.id)
    
    
    const products = useSelector(selectProducts)
    console.log('they are:',products)

    return (
        <Wrapper>
            {
                products && (
                    <DetailsWrapper>
                        {products
                        .filter((product) => product.id === params.id)
                        .map((product) => (
                        <DetailResult  
                        key = {product.id}
                        id = {product.id}
                        image = {product.image}
                        description  = {product.description}
                        title = {product.title}
                        price = {product.price}
                        quantity = {product.quantity} 
                        ></DetailResult>
                        ))} 
                    </DetailsWrapper>
                )
            }
            
        </Wrapper>
    )
}

export default Details

