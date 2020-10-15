import React from "react";
import "../scss/WeatherForecast.scss";
import Chart from "./ChartWeather";
import Forecast7Days from "./Forecast7Days";
function WeatherForecast(props) {
    const _5DaysData = props._5DaysData,
        _7DaysData = props._7DaysData;
    return (
        <div className='WeatherForecast'>
            <Chart data={_5DaysData} />
            <Forecast7Days data={_7DaysData}/>
        </div>
    );
}

export default WeatherForecast;
