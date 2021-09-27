import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectItemsCount, selectItems, selectBasketTotal } from '../../reducers/basketSlice'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@mui/icons-material/Close';
import { selectProducts } from '../../reducers/productSlice'
import SearchResults from '../SearchResults/SearchResults';
import {Wrapper, ImageWrapper, SearchWrapper, Input, BasketWrapper, ResultsWrapper, ResultsInnerWrapper, CloseWrapper, CheckoutView, Sidebar, CloseWrapperBasket, ButtonWrapper,  } from './Styles'
import { Button } from '@material-ui/core';
import BasketView from '../BasketView/BasketView';
import { showSidebar, hideSidebar } from '../../reducers/sidebarSlice'


function Header() {
  const numberOfItemsInBasket = useSelector(selectItemsCount);
  const totalPrice = useSelector(selectBasketTotal);
  console.log(numberOfItemsInBasket)
  const history = useHistory();

  const [searchInput, setSearchInput] = useState("");
  // console.log(searchInput);

  const products = useSelector(selectProducts);

  const closeSearch = () => {
    setSearchInput("");
  }

  const items = useSelector(selectItems);

  const dispatch = useDispatch()

  const [sidebar, setSidebar] = useState(false);

  const closeSidebar = () => {
    dispatch(hideSidebar())
  }
  
  const showBasketSidebar = () => {
    dispatch(showSidebar())
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


      <BasketWrapper onClick = {showBasketSidebar   
      }>
        <ShoppingBasketIcon />
        <p>{numberOfItemsInBasket} </p>
      </BasketWrapper>
    
    
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

    {/* ADD BASKET SIDEBAR COMPONENT */}

      <CheckoutView>    
      <Sidebar show = {sidebar ? showBasketSidebar : closeSidebar} >
              <CloseWrapperBasket>
                <CloseIcon onClick = {closeSidebar} />
              </CloseWrapperBasket> 
            <h1>Your Basket</h1>
              <p>Total: £{totalPrice.toFixed(2)}</p>
              <p>Total items in your basket: {numberOfItemsInBasket} </p>

              {items.map(item => (
                <BasketView 
                key = {item.id} 
                title = {item.title}
                price = {item.price}
                id = {item.id} 
                quantity = {item.quantity}
                image = {item.image}/>
              ))}

        <ButtonWrapper onClick = {() => history.push("/basket")}>
        <Button variant="contained" color="primary">Go to Checkout</Button>
        </ButtonWrapper>
        </Sidebar>
    </CheckoutView> 
    
    </Wrapper>
  )
}

export default Header

