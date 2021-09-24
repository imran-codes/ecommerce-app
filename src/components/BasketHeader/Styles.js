import styled from 'styled-components';

export const Wrapper = styled.div ` 
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  padding: 5px;
  max-height: 100px;
  top: 0;
  position: sticky;
  z-index: 10;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  
  p {
    cursor: pointer;
  }

  @media (max-width: 1416px) {
    margin: 0 80px;
}
@media (max-width: 1220px) {
    margin: 0 0px;
}
`

export const ImageWrapper = styled.div `
display: flex;
justify-content: center;
  
  img {
    width: 150px;
    cursor: pointer;
    object-fit: contain;
  }

  @media (max-width: 425px) {
    img {
      width: 100px;
    }
    
}
`

export const SearchWrapper = styled.div `
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 2px solid lightgrey;
  padding: 5px 15px;
  border-radius: 20px;

  .MuiSvgIcon-root {
    color: gray !important;
  }


  
  @media (max-width: 768px) {
    width: 200px;
}

@media (max-width: 425px) {
    width: 180px;
}
  
  `

export const Input = styled.input `
  flex: 1;
  padding: 5px;
  outline: none;
  border: none;

  

`

export const ResultsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  grid-column: span 3;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  width: 100vw;


`

export const ResultsInnerWrapper = styled.div `
  display: grid;
  place-items: center;
  margin: 20px 0;
`
export const CloseWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin-right: 8px;
.MuiSvgIcon-root {
    color: red !important;
    font-size: 22px !important;
    font-weight: bolder !important;
  }


`


