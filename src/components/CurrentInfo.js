import React from "react";
import "../scss/CurrentInfo.scss";
import InfoItem from "./InfoItem";
function CurrentInfo(props) {
    const data = props.data,
        {
            main: {humidity: humidity},
            wind: {speed: wind_speed},
            clouds: {all: cloud},
        } = data,
        listValue = [humidity, Math.floor(parseFloat(wind_speed * 36))/10, cloud],
        listName = ["Độ ẩm", "Gió", "Mây"],
        listUnit = ["%", "km/h", "%"],
        list = listValue.map((item, index) => {
            return (
                <InfoItem
                    key={listName[index]}
                    value={item}
                    unit={listUnit[index]}
                    name={listName[index]}
                />
            );
        });
    return <div className='CurrentInfo'>{list}</div>;
}

export default CurrentInfo;
