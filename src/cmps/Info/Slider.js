import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";

// Get the len of the imageSlider for holding it
const len = sliderImage.length - 1;

// Slider function to hold the clicks
function Slider() {
    // variables for set the slider image's slider
    const [activeIndex, setActiveIndex] = useState(0);

    // using useEffect (hooks) for holding the setActiveIndex and cleanInterval functions for set index of the image slider
    useEffect(() => {
        const interval = setInterval (() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            <Arrows
                prevSlide={() => 
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() => 
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
        </div>
    )
}

export default Slider;