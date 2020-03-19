import React, { useState } from 'react';

function Slider() {
    let sliderArr = [1,2,3,4,5];
    const [x, setX] = useState(0);
    const goLeft = () => {
        setX(x + 100);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {
                sliderArr.map((item, index)=>{
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
export default Slider;