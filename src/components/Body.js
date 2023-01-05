import React from "react";
// import tower from "../images/eiffel-tower.jpeg";
// import china from "../images/china_wall.jpg";
// import kremlin from "../images/kremlin_wall.jpg";
import icon from "../images/location-icon.png";

export default function body(props) {
    return(
        <section>
            <img src={`../images/${props.item.imageUrl}`} alt="Eiffle Tower" className="section_img"  />
            <div className="body-style">
                <div className="first-first">
                    <div className="first">
                       <img src={icon} alt="location" className="location_icon" />
                        <h4>{props.item.location}</h4> 
                    </div>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="lower-block">
                   <h1>{props.item.title}</h1>
                    <h4>{props.item.startDate}-{props.item.endDate}</h4>
                    <p>{props.item.description}</p> 
                </div>
                
            </div>
        </section>
    )
}