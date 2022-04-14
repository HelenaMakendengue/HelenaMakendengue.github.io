import styled from "styled-components";
import ImageRow from '../components/ImageRow';
import laptop from '../assets/laptop-stickers.jpeg';
import music from '../assets/music.jpg';
import helena from '../assets/helena.jpeg';
import skateboard from '../assets/skateboard.jpg';
import camcorder from '../assets/camcorder.jpg';

const StyledAboutArea = styled.div`
    margin: 0 auto;
    width: 90%;
    min-height: 80vh;
    border: 5px solid #8efa00;
    border-radius: 7px;
    margin-bottom: 50px;
`

const StyledHeader = styled.p`
    text-align: center;
    color: #8efa00;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.75em;
`

const StyledContent = styled.div`
    margin: 20px auto;
    width: inherit;
    color: #8efa00;
    font-size: 1.25em;
    text-align: justify;
`

const About = () => {
    let images = [skateboard, laptop, helena, music, camcorder];
    let alt = ["A skateboard leaning against a wall", "A laptop covered in stickers", "Helena Makendengue smiling", "A stack of CDs", "A camcorder sitting on a surface"];
    return(
        <StyledAboutArea>
            <StyledHeader>about</StyledHeader>
            <StyledContent>
                <div>
                    <p>I’m a Nashville native and recent graduate of Georgia Tech, where I received my bachelors in Computer Science.</p>
                    <p>Growing up, the importance of education was highly emphasized in my family. As a kid of the 21st century, a great degree of my learning happened through digital technologies, whether it was through a talking story-book complete with it’s own stylus, or a kid-friendly gaming console that came with reading and arithmetic centered games. As a curious person, I wanted to learn to program to gain insight into how all of the technological wonders of my childhood functioned, not for the noble cause of creating future educational technology, but for the purpose of creating tech that would augment my experiences and interests in fashion, music, and art. Funnily enough, in high school, I took two programming classes while also doing research in an EECS lab at Vanderbilt University, where I *drumroll please* programmed an educational, augmented reality anatomy game with a Microsoft Kinect. Following high school, I decided to study CS at Georgia Tech, and during my time in college, I had the privilege of interning at Asurion, where I gained some hands-on experience as a front-end software developer.</p>
                    <p>As a black woman, I acknowledge that I would not possess the knowledge and experience in my field of interest had I not had access to the technology, resources, and opportunities that I have had. With the hopes of tackling problems related to the digital divide, I’ve had the opportunity to serve in various leadership positions in programs that focus on digital literacy and fostering an increased presence of people of color in the technology sector.</p>
                    <p>When I’m not programming or volunteering, I enjoy skateboarding, curating a heckton of Spotify playlists, playing J-RPGS, video editing, and spending time with my family.</p>
                </div>
                <ImageRow images={images} alt={alt}/>
            </StyledContent>
        </StyledAboutArea>
    )
}

export default About