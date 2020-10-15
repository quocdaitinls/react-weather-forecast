import React from "react";
import "../scss/Describe_Time.scss";
function Describe_Time() {
    const weekDays = [
            "Thứ 2",
            "Thứ 3",
            "Thứ 4",
            "Thứ 5",
            "Thứ 6",
            "Thứ 7",
            "Chủ Nhật",
        ],
        u = new Date(),
        time = weekDays[u.getDay()] + " " + u.getHours() + ":00";
    return <p className='Describe_Time'>{time}</p>;
}

export default Describe_Time;
