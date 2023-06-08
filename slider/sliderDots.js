import React from "react";

const SlideDots = ({slides, slideIndex, goToSlide, nextSlide}) => {
    return (
        <div className="page__select">
        <div className="page__select-points">
            <div className="toggle-container">
                {slides.map((slide, slideId) => (
                    <button key={slideId} onClick={() => {goToSlide(slideId)}} className={slide.id === slideIndex? `toggle-active` : 'toggle'} type="button"></button>
                    ))}  
            </div>
        </div>
    </div>
    )
}
export default SlideDots 