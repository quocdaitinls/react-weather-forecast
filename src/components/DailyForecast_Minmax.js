import React from 'react'
import '../scss/DailyForecast_Minmax.scss'
function DailyForecast_Minmax(props) {
    const min=props.min,max=props.max;
    return (
        <div className="daily_minmax">
            <span>{min}°</span>
            <span>{max}°</span>
        </div>
    )
}

export default DailyForecast_Minmax
