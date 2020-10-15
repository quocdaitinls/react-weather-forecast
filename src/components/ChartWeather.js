import React, {Component} from "react";
import "../scss/ChartWeather.scss";
import ChartOption from "./ChartOption";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import {render} from "@testing-library/react";
class ChartWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataKey: 0,
        };
    }
    setKey = (e) => {
        console.log(e);
        this.setState({
            dataKey: e,
        });
    };
    render() {
        const list = this.props.data;
        const data = [];
        const dataKeys = ["temp", "humidity"];
        const dataName = ["Nhiệt độ", "Độ ẩm"];
        if (list) {
            list.forEach((item, index) => {
                if (index < 9) {
                    let u = item.main,
                        t = new Date(item.dt_txt);
                    u.time = t.getHours() + ":00";
                    data.push(u);
                }
            });
            // console.log(data);
            return (
                <div className='ChartWeather'>
                    <ChartOption data={dataName} setKey={this.setKey} />
                    <ResponsiveContainer
                        className='responsiveContainer'
                        width='100%'
                        height='75%'>
                        <AreaChart
                            className='areaChart'
                            data={data}
                            margin={{top: 0, right: 60, left: 0, bottom: 0}}>
                            <XAxis dataKey='time' tick={{fill: "gray"}} />
                            <YAxis
                                type='number'
                                domain={["dataMin-1", "dataMax+1"]}
                                tick={false}
                                axisLine={false}
                            />
                            <CartesianGrid strokeDasharray='3 3' />
                            <Area
                                type='monotone'
                                dataKey={dataKeys[this.state.dataKey]}
                                stroke='#ffcc00'
                                fill='#fff5cc'
                                fillOpacity={1}
                                strokeWidth={3}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        return <div className='ChartWeather'></div>;
    }
}

export default ChartWeather;
