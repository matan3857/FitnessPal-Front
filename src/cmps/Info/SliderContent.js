import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
    
    return (
        <section className="silder-content">
        {sliderImage.map((slide, index) => (
            <div
                key={index}
                className={`${index === activeIndex ? "active" : "inactive"} flex justify-center align-center`}>
                <img className="slide-image" src={slide.urls} onClick={() => {
                     window.open(slide.targetURL, "_blank")
                }}/>
                <h3 className="slide-text">{slide.description}</h3>
            </div>
        ))}
        </section>
    );
}

export default SliderContent;