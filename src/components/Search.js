import React, {Component} from "react";
import "../scss/Search.scss";
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: "hanoi",
        };
    }
    changeInput = (e) => {
        this.setState({
            city: e.target.value,
        });
    };
    onKeyUp = (e) => {
        if (e.keyCode === 13) this.upState();
    };

    upState = () => {
        this.props.getCity(this.state.city);
    };
    componentDidMount() {
        this.upState();
    }
    render() {
        return (
            <div className='Search'>
                <input
                    type='text'
                    onChange={this.changeInput}
                    onKeyUp={this.onKeyUp}
                    placeholder="Enter your city..."
                />
                <button type='submit' onClick={this.upState}>
                    <i className='fa fa-search'></i>
                </button>
            </div>
        );
    }
}

export default Search;
