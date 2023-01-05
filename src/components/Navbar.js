import React from "react";
import globe from "../images/globe.png";

export default function nav() {
    return(
        <nav>
            <div className="header_div">
                <img src={globe} alt="Globe Icon" className="globe_img"/>
                <p>my travel journal</p>
            </div>
        </nav>
    )
}
