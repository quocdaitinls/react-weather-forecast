import React from "react";
import "../scss/CurrentInfo.scss";
import InfoItem from "./InfoItem";
function CurrentInfo(props) {
    const scale = props.scale,
        data = props.data,
        {
            main: {humidity: humidity},
            wind: {speed: wind_speed},
            clouds: {all: cloud},
        } = data;
    const listValue = [
            humidity,
            scale === "C"
                ? Math.floor(parseFloat(wind_speed * 36)) / 10
                : wind_speed,
            cloud,
        ],
        listName = ["Độ ẩm", "Gió", "Mây"],
        listUnit = ["%", scale === "C" ? "km/h" : "dặm/h", "%"],
        listIcon = ["tint", "wind", "cloud"],
        list = listValue.map((item, index) => {
            return (
                <InfoItem
                    key={listName[index]}
                    value={item}
                    unit={listUnit[index]}
                    name={listName[index]}
                    icon={listIcon[index]}
                />
            );
        });
    return <div className='CurrentInfo'>{list}</div>;
}

export default CurrentInfo;
