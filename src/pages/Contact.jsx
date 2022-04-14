import ContentGrid from '../components/ContentGrid';

const Contact = () => {
    let images = [false, true, false, true, true, true, false, true, false]
    let url = [
        "https://drive.google.com/file/d/1W0SsD5KyYB7Z6g_Q-nne95Z7CahMlp2K/view?usp=sharing",
        "mailto:helenamakens1013@gmail.com",
        "https://www.linkedin.com/in/helenahmakendengue/",
        "https://github.com/HelenaMakendengue"
    ]
    let target = "_blank"
    return(
        <ContentGrid 
        images={images} 
        text={[
            <i class="fas fa-file-alt"></i>,
            <i class="fas fa-envelope-square"></i>,
            <i class="fab fa-linkedin"></i>, 
            <i class="fab fa-github-square"></i>
        ]}
        url={url}
        target={target}/>
    )
}

export default Contact