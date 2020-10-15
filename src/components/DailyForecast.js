import React from "react";
import "../scss/DailyForecast.scss";
import DailyForecast_Img from "./DailyForecast_Img";
import DailyForecast_Minmax from "./DailyForecast_Minmax";
import DailyForecast_Title from "./DailyForecast_Title";
function DailyForecast(props) {
    const data = props.data;
    return (
        <div className='DailyForecast'>
            <DailyForecast_Title data={data.dt}/>
            <DailyForecast_Img data={data.weather[0].icon}/>
            <DailyForecast_Minmax min={data.temp.min} max={data.temp.max}/>
        </div>
    );
}

export default DailyForecast;
