import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";//lib
import "react-lazy-load-image-component/src/effects/blur.css";//component of same lib

//used in through out thats why created as another component 

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt="hero banner images"
            effect="blur"//opacity or blur any can be used 
            src={src}
        />
    );
};

export default Img;
/*
Lazy loading is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern. Typically, these assets are only loaded when they are scrolled into view.
*/