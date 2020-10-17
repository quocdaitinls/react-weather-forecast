import React from "react";
import "../scss/BodyWeather.scss";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
function BodyWeather(props) {
    function setScale(e) {
        props.setScale(e);
    }
    function rounding(e, p) {
        const z = Math.pow(10, p);
        return Math.floor(parseFloat(e) * z) / z;
    }
    const currentData = props.currentData,
        _5DaysData = props._5DaysData,
        _7DaysData = props._7DaysData;

    for (const prop in currentData.main) {
        currentData.main[prop] = rounding(currentData.main[prop],1);
    }
    [..._5DaysData].forEach((item, index) => {
        for (const prop in item.main) {
            item.main[prop] = rounding(item.main[prop],1);
        }
        _5DaysData[index] = item;
    });
    [..._7DaysData].forEach((item, index) => {
        for (const prop in item.temp) {
            item.temp[prop] = rounding(item.temp[prop],1);
        }
        for (const prop in item.feels_like) {
            item.feels_like[prop] = rounding(item.feels_like[prop],1);
        }
        _7DaysData[index] = item;
    });
    if (currentData) {
        return (
            <div className='BodyWeather'>
                <CurrentWeather
                    currentData={currentData}
                    setScale={setScale}
                    scale={props.scale}
                />
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
