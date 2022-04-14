import styled from "styled-components";

const StyledMainDiv = styled.div`
    text-align: center;
    margin: 75px 0px;
`

const StyledHeader = styled.p`
    color: #8efa00;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    margin-bottom: 15px;
    & > span {
        font-family: sans-serif;
        font-size: .70em;
    }
`

const StyledDescription = styled.p`
    margin-bottom: 35px;
`

const RepoButton = styled.a`
    color: #007FFF;    
    background: #8efa00;
    font-size: 1em;
    padding: 7px 15px;
    border-radius: 5px;
    text-decoration: none;
`

const Project = (props) => {
    return (
        <StyledMainDiv>
            <StyledHeader>{props.title} / <span>{props.byline}</span></StyledHeader>
            <StyledDescription>{props.description}</StyledDescription>
            <RepoButton href={props.link} target="_blank" rel="noopener noreferrer">
                {props.linkName}
            </RepoButton>
        </StyledMainDiv>
    )
}

export default Project