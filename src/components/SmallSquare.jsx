import styled from "styled-components";

const StyledSquare = styled.div` 
    border: 5px solid #8efa00;
    border-radius: 7px;
    text-align: center;
    &::before {
        content: "";
        padding-top: 100%;
        display: block;
    }
    position: relative;
    flex-basis: calc(33.333% - 10px);
    margin: 5px;
    box-sizing: border-box;
`

const StyledSquareImage = styled.div` 
    border: 5px solid #8efa00;
    border-radius: 7px;
    &::before {
        content: "";
        padding-top: 100%;
        display: block;
    }
    position: relative;
    flex-basis: calc(33.333% - 10px);
    margin: 5px;
    box-sizing: border-box;
    background: url(${props => props.background});
    background-size: contain;
    background-repeat: no-repeat;
`

const StyledLink = styled.a`
    color: #8efa00;
    text-decoration: none;
    font-family: 'Orbitron', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    ${StyledSquare}:hover & {
        color: white;
    }
    & > i {
        font-size: 65px;
    }
`

const SmallSquare = (props) => {
    if (props.images) {
        return (
            <StyledSquareImage background={props.background}/>
        )
    } else {
        return (
            <StyledSquare>
                <StyledLink href={props.url} alt={props.alt} target={props.target} rel="noopener noreferrer">{props.text}</StyledLink>
            </StyledSquare>
        )
    }
}

export default SmallSquare