import styled from 'styled-components'

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const ImageWrapper = styled.div `
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    padding: 20px;
  }
  
`

export const DetailsWrapper = styled.div `
  padding: 10px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  h3, h4, p {
    padding: 1px 0;
  }

  @media (max-width:768px) {
    height: 180px
  }
`

export const ButtonsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: auto;
`