import React from "react";
import "../scss/DailyForecast_Title.scss";
function DailyForecast_Title(props) {
    const time = new Date(props.data*1000),
        weekDays = ["Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7", "CN"],
        title = weekDays[time.getDay()];
    return <p className='daily_title'>{title}</p>;
}

export default DailyForecast_Title;
