import React, {Component} from "react";
import BodyWeather from "./BodyWeather";
import HeaderWeather from "./HeaderWeather";
import "../scss/Weather.scss";
class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: "",
            info: "",
            lang: "vi",
            scale: "C",
            currentData: "",
            _7DaysData: "",
            _5DaysData: "",
        };
        this.key = "a63ddfcc6f9097893edff5f34dad767d";
    }
    setCity = (e) => {
        this.setState(
            {
                city: e,
            },
            this.fetchData
        );
    };
    setScale = (e) => {
        this.setState(
            {
                scale: e,
            },
            this.fetchData
        );
    };
    fetchData = () => {
        let url =
            "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.state.city +
            "&lang=" +
            this.state.lang +
            "&units=" +
            (this.state.scale === "C" ? "metric" : "imperial") +
            "&appid=" +
            this.key;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState(
                    {
                        currentData: res,
                    },
                    this.fetch7Days(res.coord.lat, res.coord.lon)
                );
            })
            .catch((err) => console.log(err));
        this.fetch5Days();
    };
    fetch7Days = (lat, lon) => {
        let url =
            "http://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            lon +
            "&exculde=current,minutely,hourly&lang=" +
            this.state.lang +
            "&units=" +
            (this.state.scale === "C" ? "metric" : "imperial") +
            "&appid=" +
            this.key;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    _7DaysData: res.daily,
                });
            })
            .catch((err) => console.log(err));
    };
    fetch5Days = () => {
        let url =
            "http://api.openweathermap.org/data/2.5/forecast?q=" +
            this.state.city +
            "&lang=" +
            this.state.lang +
            "&units=" +
            (this.state.scale === "C" ? "metric" : "imperial") +
            "&appid=" +
            this.key;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    _5DaysData: res.list,
                });
            })
            .catch((err) => console.log(err));
    };
    componentDidUpdate() {
        //auto call AJAX after least 5 mins
        setInterval(() => {
            this.fetchData();
        }, 300000);
    }
    render() {
        return (
            <div className='Weather'>
                <HeaderWeather
                    getCity={this.setCity}
                    currentData={this.state.currentData}
                />
                <BodyWeather
                    setScale={this.setScale}
                    currentData={this.state.currentData}
                    _7DaysData={this.state._7DaysData}
                    _5DaysData={this.state._5DaysData}
                    scale={this.state.scale}
                />
            </div>
        );
    }
}

export default Weather;
