import React from "react";
import "../scss/Option.scss";
function Option(props) {
    function setKey() {
        props.setKey(props.name);
    }
    return <button className='Option' onClick={setKey}>{props.value}</button>;
}

export default Option;
