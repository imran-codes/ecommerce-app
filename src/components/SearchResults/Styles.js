import styled from 'styled-components'

export const Wrapper = styled.div `
background-color: white;
display: flex;
align-items: ceutnter;
margin: 15px 0px

`
export const ImageWrapper = styled.div`
    img {
        width: 50px;

        &:hover {
            transform: scale(1.4);
            transition: all 0.2s linear;
        }
        
    }


`

export const DetailsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10px;

p {
    font-size: 1rem;
}


`