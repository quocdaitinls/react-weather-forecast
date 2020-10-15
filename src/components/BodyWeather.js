import React from "react";
import "../scss/BodyWeather.scss";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
function BodyWeather(props) {
    function setScale(e) {
        props.setScale(e);
    }
    const currentData = props.currentData,
        _5DaysData = props._5DaysData,
        _7DaysData = props._7DaysData;
    if (currentData) {
        return (
            <div className='BodyWeather'>
                <CurrentWeather currentData={currentData} setScale={setScale} scale={props.scale}/>
                <WeatherForecast
                    _7DaysData={_7DaysData}
                    _5DaysData={_5DaysData}
                />
            </div>
        );
    }
    return <div className='BodyWeather'></div>;
}

export default BodyWeather;
