import React from "react";
import "../scss/Describe.scss";
import Describe_Desc from "./Describe_Desc";
import Describe_Location from "./Describe_Location";
import Describe_Time from "./Describe_Time";

function Describe(props) {
    const data = props.currentData;
    // console.log(data);
    if (data) {
        //     console.log(data);
        return (
            <div className='Describe'>
                <Describe_Location data={data} />
                <Describe_Time data={data} />
                <Describe_Desc data={data} />
            </div>
        );
    }
    return <h1 className='Describe'>Weather App</h1>;
}

export default Describe;
