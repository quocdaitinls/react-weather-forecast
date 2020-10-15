import React from "react";
import "../scss/Describe_Desc.scss";
function Describe_Desc(props) {
    const data = props.data;
    return <span className='Describe_Desc'>{data.weather[0].description}</span>;
}

export default Describe_Desc;
