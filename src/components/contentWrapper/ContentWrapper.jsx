import React from "react";

import "./style.scss";

//creating a div & making it higher order component 

//div will center the all component of page 

//because of needed repetedly made another folder of it
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
