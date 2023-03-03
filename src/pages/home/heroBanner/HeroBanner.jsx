import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    //data fetching from upcoming
    const { data, loading } = useFetch("/movie/upcoming");

    // every time the page loads a new random banner will be call by api
    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;//for any random number under 20 only so *20 and flooe bcz of decimal number 
        setBackground(bg);
    }, [data]);


//type in SearchI nput will be saved in state
    const searchQueryHandler = (event) => {
        //condition query should not be empty
        if (event.key === "Enter" && query.length > 0) {
            //navigating to the searched query
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {/* when our loading state is false then only it will render image  */}
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            {/* opacity-layer for gradient view of merging heroBanner and below content */}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
