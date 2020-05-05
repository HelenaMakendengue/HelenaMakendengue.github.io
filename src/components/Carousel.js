import React, { useState } from 'react';
import "../../src/styles/Carousel.scss";
import pic from "../assets/example.jpg"

function Carousel() {
    let carouselArr = [
        <div className="slide-content">
            <div>
                <h1>Playlist Curator <span role="img" aria-label="musical note">🎵</span></h1>
                <br/>
                <li>
                    <a href="http://bit.ly/spotify-helena" 
                    target="_blank" rel="noopener noreferrer">
                        Follow me on Spotify!
                    </a>
                </li>
                <br/>
                <li> 
                    <a href="https://open.spotify.com/playlist/3ZKyszSdjB5sAr7pulSumX?si=HmGmRHlSSz-Xdv9h_teD6A" 
                    target="_blank" rel="noopener noreferrer">
                        Current Favorites
                    </a>
                </li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>,
        <div className="slide-content">
            <div>
                <h1>Photographer <span role="img" aria-label="camera">📷</span></h1>
                <br/>
                <li>take photos for hackgt</li>
                <br/>
                <li>
                    <a href="https://www.instagram.com/helenatakespictures/" 
                    target="_blank" rel="noopener noreferrer">
                        @helenatakespictures
                    </a>
                </li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>,
        <div className="slide-content">
            <div>
                <h1>Filmmaker <span role="img" aria-label="clapper board">🎬</span></h1>
                <br/>
                <li>
                    <a href="https://www.youtube.com/watch?v=uFYS3wb34yg" 
                    target="_blank" rel="noopener noreferrer">
                        "It's Different" - Campus Movie Fest
                    </a>
                </li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>,
        <div className="slide-content">
            <div>
                <h1>Content Creator <span role="img" aria-label="hammer and wrench">🛠</span></h1>
                <br/>
                <li>
                    <a href="https://open.spotify.com/playlist/2Klg4XHwClXafOoiHNCcyi?si=LAVeITEbRfG2tZjk3ehkjA" 
                    target="_blank" rel="noopener noreferrer">
                        songs that inspire me to create content
                    </a>
                </li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>,
        <div className="slide-content">
            <div>
                <h1>Gamer <span role="img" aria-label="video game controller">🎮</span></h1>
                <br/>
                <li>JRPGS, playstation, playstation access, visual novels, nintendo, sims, puppet combo</li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>,
        <div className="slide-content">
            <div>
                <h1>Fashionista <span role="img" aria-label="dress">👗</span></h1>
                <br/>
                <li>
                    <a href="https://www.youtube.com/channel/UCvO6uJUVJQ6SrATfsWR5_aA" 
                    target="_blank" rel="noopener noreferrer">
                        PAQ
                    </a>
                </li>
                <br/>
                <li>
                    <a href="https://www.youtube.com/channel/UC5t2Ns8OAS12ig8pAZk9_PA" 
                    target="_blank" rel="noopener noreferrer">
                        Internet Girl
                    </a>
                </li>
                <br/>
                <li>
                    <a href="https://www.youtube.com/channel/UCvkk9KAIk4KBXzJ9wi-II7w" 
                    target="_blank" rel="noopener noreferrer">
                        StealTheSpotlight
                    </a>
                </li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>,
        <div className="slide-content">
            <div>
                <h1>Spider-Man Aficionado <span role="img" aria-label="spiderweb">🕸</span></h1>
                <br/>
                <li>ultimate comic</li>
                <br/>
                <li>tobey > andrew > tom</li>
            </div>
            <img src={pic} alt="placeholder image"/>
        </div>
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        setX(x + 100);
        x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100);
    };
    return (
        <div className="carousel">
            {
                carouselArr.map((item, index) => {
                    return(
                        <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                <i class="fa fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i class="fa fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Carousel;