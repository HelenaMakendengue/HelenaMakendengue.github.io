import ContentGrid from '../components/ContentGrid';

const Home = () => {
    let images = [false, true, false, true, true, true, false, true, false]
    let text = ["home", "about", "projects", "contact"]
    let url = ["/", "/about", "/projects", "/contact"]
    let target = "_self"
    return(
        <ContentGrid images={images} text={text} url={url} target={target}/>
    )
}

export default Home