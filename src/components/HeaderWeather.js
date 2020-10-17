import React from "react";
import "../scss/HeaderWeather.scss";
import Describe from "./Describe";
import Search from "./Search";

function HeaderWeather(props) {
    function getCity(e) {
        props.getCity(e);
    }
    
    const currentData = props.currentData;
    return (
        <div className='HeaderWeather'>
            <Describe currentData={currentData} />
            <Search getCity={getCity} />
        </div>
    );
}

export default HeaderWeather;
