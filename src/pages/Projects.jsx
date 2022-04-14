import styled from "styled-components";
import Project from '../components/Project';

const StyledProjectsArea = styled.div`
    margin: 0 auto;
    width: 90%;
    min-height: 80vh;
    border: 5px solid #8efa00;
    border-radius: 7px;
    margin-bottom: 50px;
    padding-bottom: 50px;
`

const StyledHeader = styled.p`
    text-align: center;
    color: #8efa00;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.75em;
    & > a {
        color: #8efa00;
    }
`

const StyledContent = styled.div`
    margin: 20px auto;
    width: inherit;
    color: #8efa00;
    font-size: 1.25em;
`

const Projects = () => {
    const projects = [
        {
            title: "Mock Twitter API",
            byline: "FastTrack @ Cook Systems International",
            description: "Implemented a RESTful API that handles backend operations for a social media application that resembles the conceptual model of Twitter",
            link: "https://github.com/fasttrackd-student-work/spring-assessment-social-media-spring-in-our-step",
            linkName: "View the 'Mock Twitter API' repository"
        },
        {
            title: "@ladylena1013 ⦿ link in bio",
            byline: "Made with ♡ by Helena Makendengue",
            description: "Built a responsive, Linktree™-inspired, link-in-bio website to share multiple links at once on my social media platforms",
            link: "https://helenamakendengue.github.io/links",
            linkName: "View the link-in-bio website"
        },
        {
            title: "helenamakendengue.github.io",
            byline: "Made with ♡ by Helena Makendengue",
            description: "Programmed my personal website",
            link: "https://helenamakendengue.github.io",
            linkName: "View my personal website"
        }
    ]
    return(
        <StyledProjectsArea>
            <StyledHeader>projects ⦿ <a href="https://drive.google.com/file/d/1W0SsD5KyYB7Z6g_Q-nne95Z7CahMlp2K/view?usp=sharing" target="_blank"rel="noopener noreferrer">resume</a></StyledHeader>
            <StyledContent>
                {projects.map(projects =>
                    <Project key={projects.title} title={projects.title} byline={projects.byline} description={projects.description} link={projects.link} linkName={projects.linkName}/>
                )}
            </StyledContent>
        </StyledProjectsArea>
    )
}

export default Projects