import React from "react";
import "../scss/Forecast7Days.scss";
import DailyForecast from "./DailyForecast";
function Forecast7Days(props) {
    const data = props.data;
    if (data) {
        const list = data.map((item) => {
            return <DailyForecast key={item.dt} data={item} />;
        });
        return <div className='Forecast7Days'>{list}</div>;
    }
    return <div className="Forecast7Days"></div>
}

export default Forecast7Days;
