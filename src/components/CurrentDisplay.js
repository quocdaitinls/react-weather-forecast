import React from "react";
import "../scss/CurrentDisplay.scss";
import CurrentImg from "./CurrentImg";
import CurrentTemp from "./CurrentTemp";
import Scale from "./Scale";
function CurrentDisplay(props) {
    function setScale(e) {
        props.setScale(e);
    }
    const data = props.data;
    return (
        <div className='CurrentDisplay'>
            <CurrentImg data={data.weather[0].icon} />
            <CurrentTemp data={data.main.temp} />
            <Scale setScale={setScale} />
        </div>
    );
}

export default CurrentDisplay;
