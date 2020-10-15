import React from "react";
import "../scss/InfoItem.scss";
function InfoItem(props) {
    return (
        <div className='InfoItem'>
            {props.name}: {props.value} {props.unit}
        </div>
    );
}

export default InfoItem;
