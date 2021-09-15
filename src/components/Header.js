import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectItemsCount } from '../reducers/basketSlice'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  const numberOfItemsInBasket = useSelector(selectItemsCount);
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);


  return (
    <Wrapper className = "header">
      <ImageWrapper>
        <img onClick = {() => history.push("/")} src = "https://www.brandingmag.com/wp-content/uploads/2012/09/ebay-logo-redesign-1.jpg" alt = "logo"></img>
        </ImageWrapper> 

        <SearchWrapper>
        <Input 
          type="text" 
          placeholder = 'Start your search'
          value = {searchInput}
          onChange = {(e) => setSearchInput(e.target.value)} />
          <SearchIcon />
        </SearchWrapper> 

      <BasketWrapper onClick = {() => history.push("/basket")}>
        <ShoppingBasketIcon />
        <p>{numberOfItemsInBasket} </p>
      </BasketWrapper>
    
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div ` 
  display: flex;
  justify-content: space-between;
  margin: 0 200px;
  padding: 5px;
  max-height: 100px;

  p {
    cursor: pointer;
  }

  @media (max-width: 1416px) {
    margin: 0 100px;
}
@media (max-width: 1220px) {
    margin: 0 10px;
}
`

const BasketWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const ImageWrapper = styled.div `
  
  img {
    width: 150px;
    cursor: pointer;
  }
`

const SearchWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  border: 2px solid lightgrey;
  padding: 5px 15px;
  border-radius: 20px;
  width: 300px;
  
  
  `

const Input = styled.input `
  flex: 1;
  padding: 5px;
  outline: none;

 

`

