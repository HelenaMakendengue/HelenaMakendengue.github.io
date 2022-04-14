import styled from "styled-components";
import SmallSquare from './SmallSquare';
import laptop from '../assets/laptop-stickers.jpeg';
import music from '../assets/music.jpg';
import helena from '../assets/helena.jpeg';
import skateboard from '../assets/skateboard.jpg';
import camcorder from '../assets/camcorder.jpg';

const StyledGrid = styled.div`
    margin: 0 auto;
    width: 45%;
    display: flex;
    flex-wrap: wrap;
`

const ContentGrid = (props) => {
    return(
        <StyledGrid>
            <SmallSquare images={props.images[0]} text={props.text[0]} url={props.url[0]} target={props.target}/>
            <SmallSquare images={props.images[1]} alt={"A laptop covered in stickers"} background={laptop}/>
            <SmallSquare images={props.images[2]} text={props.text[1]} url={props.url[1]} target={props.target}/>

            <SmallSquare images={props.images[3]} alt={"A skateboard leaning against a wall"} background={skateboard}/>
            <SmallSquare images={props.images[4]} alt={"Helena Makendengue smiling"} background={helena}/>
            <SmallSquare images={props.images[5]} alt={"A camcorder sitting on a surface"} background={camcorder}/>

            <SmallSquare images={props.images[6]} text={props.text[2]} url={props.url[2]} target={props.target}/>
            <SmallSquare images={props.images[7]} alt={"A stack of CDs"} background={music}/>
            <SmallSquare images={props.images[8]} text={props.text[3]} url={props.url[3]} target={props.target}/>
        </StyledGrid>
    )
}

export default ContentGrid