import React from "react";
import "../scss/ChartOption.scss";
import Option from "./Option";
function ChartOption(props) {
    function setKey(e) {
        props.setKey(e);
    }
    const data = props.data,
        list = data.map((item, index) => {
            return <Option key={index} value={item} name={index} setKey={setKey}/>;
        });
    return <div className='ChartOption'>{list}</div>;
}

export default ChartOption;
