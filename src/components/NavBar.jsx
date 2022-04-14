import styled from "styled-components";

const StyledNavBar = styled.div` 
    padding: 20px 0px;
    text-align: center;
`
const StyledNavLink = styled.a`
    color: #8efa00;
    text-decoration: none;
    font-size: 3em;
    font-family: 'Orbitron', sans-serif;
`

const NavBar = () => {
    return(
        <StyledNavBar>
            <StyledNavLink href="/">helena makendengue</StyledNavLink>
        </StyledNavBar>
    )
}

export default NavBar