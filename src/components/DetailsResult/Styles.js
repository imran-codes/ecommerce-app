import styled from 'styled-components'

export const Container = styled.div`
display: grid;
place-items: center;
padding: 20px;

`

export const Wrapper = styled.div `
display: flex;
padding: 20px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

export const ImageWrapper = styled.div `
flex: 0.5;
    img {
        width: 300px;
        padding: 20px;
    }
`

export const DetailsWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px;

h2, h5, p {
    padding-bottom: 10px;
}


`

export const ButtonsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: auto;
`

