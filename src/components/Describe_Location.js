import React from "react";
import "../scss/Describe_Location.scss";
function Describe_Location(props) {
    const data = props.data;
    if (data) {
        return (
            <h1 className='Describe_Location'>
                {data.name}, {data.sys.country}
            </h1>
        );
    }
    return <h1 className='Describe_Location'></h1>;
}

export default Describe_Location;
