import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 200px;

  h2 {
    padding: 5px;
    margin-top: 10px;
  }

  @media (max-width: 1416px) {
    margin: 0 100px;
}
@media (max-width: 1220px) {
    margin: 0 10px;
}
`
export const ImageWrapper = styled.div`
display: grid;
place-items: center;
width: 100%;
padding: 5px;
margin-top: 10px;

img {
  display: grid;
place-items: center;
  object-fit: cover;
  width: 100%;
  max-height: 300px;
}


`

export const ProductWrapper = styled.div `

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}

`

