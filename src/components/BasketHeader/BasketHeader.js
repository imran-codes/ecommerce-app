import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectItemsCount} from '../../reducers/basketSlice'
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@mui/icons-material/Close';
import { selectProducts } from '../../reducers/productSlice'
import SearchResults from '../SearchResults/SearchResults';
import {Wrapper, ImageWrapper, SearchWrapper, Input, ResultsWrapper, ResultsInnerWrapper, CloseWrapper} from './Styles'


function Header() {
  const numberOfItemsInBasket = useSelector(selectItemsCount);
  console.log(numberOfItemsInBasket)
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");
  // console.log(searchInput);

  const products = useSelector(selectProducts);

  const closeSearch = () => {
    setSearchInput("");
  }


  

  return (
    <Wrapper className = "header">
      <ImageWrapper>
        <img onClick = {() => history.push("/")} src = "https://www.brandingmag.com/wp-content/uploads/2012/09/ebay-logo-redesign-1.jpg" alt = "logo"></img>
        </ImageWrapper> 

        <SearchWrapper>
        <Input 
          type="text" 
          placeholder = 'Search for your products...'
          value = {searchInput}
          onChange = {(e) => setSearchInput(e.target.value)} />
          {searchInput && 
          <CloseWrapper>
            <CloseIcon onClick = {closeSearch} />
            </CloseWrapper> }
          <SearchIcon />
        </SearchWrapper> 

    
    <ResultsWrapper>
      {
            searchInput && (
              <ResultsInnerWrapper>
                <h2>Add products to your basket</h2>
              {
              products && products
                .filter((product) => product.title.toLowerCase().includes(searchInput))
                .map((product) => (
                  <SearchResults
                  key = {product.id}
                  id ={product.id}
                  image = {product.image}
                  title = {product.title}
                  price = {product.price}
                  quantity = {product.quantity}
                  />
                ))
              }
                </ResultsInnerWrapper>
            )
      }
    </ResultsWrapper>
    
    </Wrapper>
  )
}

export default Header

