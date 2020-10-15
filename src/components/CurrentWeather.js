import React from "react";
import "../scss/CurrentWeather.scss";
import CurrentDisplay from "./CurrentDisplay";
import CurrentInfo from "./CurrentInfo";

function CurrentWeather(props) {
    function setScale(e) {
        props.setScale(e);
    }
    const data=props.currentData;
    // console.log(data);
    return (
        <div className="CurrentWeather">
            <CurrentDisplay data={data} setScale={setScale}/>
            <CurrentInfo data={data}  scale={props.scale}/>
        </div>
    );
}

export default CurrentWeather;
