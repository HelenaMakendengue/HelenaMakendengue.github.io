import styled from "styled-components";

const ImageContainer = styled.div`
    display: flex;
    width: 100%;
    column-gap: 10px;
    margin-top: 50px;
`

const ImageWrapper = styled.div`
    flex: 1;
    & > img {
        width: 100%;
        border-radius: 7px;
    }
`

const ImageRow = (props) => {
    let index = 0;
    return(
        <ImageContainer>
            {props.images.map(image =>
                <ImageWrapper>
                    <img src={image} alt={props.alt[index++]}></img>
                </ImageWrapper>
            )}
        </ImageContainer>
    )
}

export default ImageRow