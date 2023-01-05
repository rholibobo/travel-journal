import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import data from "./components/data";


export default function app(){
    const travelDetails = data.map(item => {
        return <Body 
        item = {item}

        />
    })
    return(
        <main>
         <Navbar /> <br/><br/><br/><br/>
         <section className="body-section">
                {travelDetails}
        </section> 
        </main>
    )
}