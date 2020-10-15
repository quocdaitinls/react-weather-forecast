import React, {Component} from "react";
import "../scss/Scale.scss";
class Scale extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: "C",
        };
    }
    setScale = (e) => {
        this.props.setScale(e);
    };
    changeScaleC = () => {
        if (this.state.scale === "F") {
            console.log(this.state.scale);
            this.setScale("C");
            this.setState({scale: "C"});
        }
    };
    changeScaleF = () => {
        if (this.state.scale === "C") {
            console.log(this.state.scale);
            this.setScale("F");
            this.setState({scale: "F"});
        }
    };
    render() {
        return (
            <div className='Scale'>
                <button type='submit' onClick={this.changeScaleC}>
                    °C
                </button>
                <button type='submit' onClick={this.changeScaleF}>
                    °F
                </button>
            </div>
        );
    }
}

export default Scale;
