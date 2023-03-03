import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {/* //running loop with optional chaning */}
            {data?.map((g) => {
                //exceptional case if data not present simply return
                if (!genres[g]?.name) return;
                return (
                    //printing genres name
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;
