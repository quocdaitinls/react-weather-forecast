import React from "react";
import "../scss/InfoItem.scss";
function InfoItem({icon: icon, name: name, value: value, unit: unit}) {
    const icon_class = "fa fa-" + icon;
    return (
        <span className='InfoItem'>
            <i className={icon_class}></i> {name}: {value} {unit}
        </span>
    );
}

export default InfoItem;
