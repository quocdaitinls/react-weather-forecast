import React from "react";
import "../scss/DailyForecast.scss";
function DailyForecast_Img(props) {
    const data = props.data;
    const style={
        backgroundImage:
            "url(http://openweathermap.org/img/wn/" + data + "@2x.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "3rem",
        height: "3rem",
    }
    return <span className='daily_img' style={style}></span>;
}

export default DailyForecast_Img;
