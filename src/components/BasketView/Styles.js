import styled from 'styled-components'

export const Wrapper = styled.div `
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;

  &:hover {
    background-color: lightgray;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    align-items: flex-start;
  }

`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    margin: 0 15px;
  }

`

export const CloseWrapper = styled.div `
  cursor: pointer;
.MuiSvgIcon-root {
    fill: red !important;
    
}

`

export const InfoWrapper = styled.div `
flex: 1;
margin-left: 35px;


  p {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    margin-left: 0px;
    padding: 5px 0px;

    p {
    display: flex;
    flex-direction: column;
    padding: 2px 0;

    &:last-child {
      margin-bottom: 2px;
    }
    
  }
  }
`

export const ImageWrapper = styled.div `


`
