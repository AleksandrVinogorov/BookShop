import React from "react"
import { useState, useEffect } from "react"
const Slider = () => {
    const slides = [
        { id: 0, url: 'https://i.ibb.co/gt2nMS4/1.jpg' },
        { id: 1, url: 'https://i.ibb.co/Xsggf0w/2.jpg' },
        { id: 2, url: 'https://i.ibb.co/jTC4G78/3.jpg' },
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            const isLastSlide = slideIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : slideIndex + 1;
            setSlideIndex(newIndex);
        }, 3000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, [slideIndex, slides.length]);

    const goToSlide = slideIndex => {
        clearInterval(intervalId);
        setSlideIndex(slideIndex);
    };

    return (
        <>
            <div className="slider__images-wrapper">
                <div className="slider__images-container">
                    <img alt="" style={{ backgroundImage: `url(${slides[slideIndex].url})` }} className="carousel" />
                </div>
                <div className="slider__promo-offer">
                    <button className="promo-offer__up">
                        <p>Change old book on new</p>
                        <img src={require("../img/arrow.svg").default} alt=""></img>
                    </button>
                    <button className="promo-offer__down">
                        <p>top 100 books 2022</p>
                        <img src={require("../img/arrow.svg").default} alt=""></img>
                    </button>
                </div>
            </div>
            <div className="slider-buttons">
                {slides.map(slide => (
                    <button
                        key={slide.id}
                        onClick={() => goToSlide(slide.id)}
                        className={slide.id === slideIndex ? 'toggle-active' : 'toggle'}
                        type="button"
                    ></button>
                ))}
            </div>
        </>
    );
};
export default Slider

