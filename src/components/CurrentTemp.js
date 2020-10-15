import React from "react";
import "../scss/CurrentTemp.scss";
function CurrentTemp(props) {
    const data = props.data;
    if (data) return <span className='CurrentTemp'>{data}</span>;
    return null;
}

export default CurrentTemp;
