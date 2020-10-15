import React from "react";

function CurrentImg(props) {
    const data = props.data;
    const style = {
        backgroundImage:
            "url(http://openweathermap.org/img/wn/" + data + "@2x.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "6rem",
        height: "6rem",
    };
    return <span className='CurrentImg' style={style}></span>;
}

export default CurrentImg;
