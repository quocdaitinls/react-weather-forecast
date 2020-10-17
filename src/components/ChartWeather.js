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
    Label,
    LabelList,
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
        this.setState({
            dataKey: e,
        });
    };
    render() {
        const list = this.props.data,
            data = [],
            dataKeys = ["temp", "humidity"],
            dataName = ["Nhiệt độ", "Độ ẩm"];
        if (list) {
            list.forEach((item, index) => {
                if (index < 9) {
                    let u = item.main,
                        t = new Date(item.dt_txt);
                    u.time = t.getHours() + ":00";
                    data.push(u);
                }
            });
            return (
                <div className='ChartWeather'>
                    <ChartOption data={dataName} setKey={this.setKey} />
                    <ResponsiveContainer
                        className='responsiveContainer'
                        width='100%'
                        height='70%'>
                        <AreaChart
                            className='areaChart'
                            data={data}
                            margin={{top: 20, right: 60, left: 0, bottom: 5}}>
                            <XAxis
                                dataKey='time'
                                tick={{fill: "#bebebe"}}
                                axisLine={false}
                                style={{fontSize: "0.5rem"}}
                                tickMargin={8}
                            />
                            <YAxis
                                type='number'
                                domain={["dataMin-1", "dataMax+3"]}
                                tick={false}
                                axisLine={false}
                            />
                            <Area
                                type='monotone'
                                dataKey={dataKeys[this.state.dataKey]}
                                stroke='#ff8800'
                                fill='#fff5cc'
                                fillOpacity={1}
                                strokeWidth={3}>
                                <LabelList
                                    dataKey={dataKeys[this.state.dataKey]}
                                    position='top'
                                    offset={10}
                                    fill='#bebebe'
                                    fontSize={10}
                                />
                            </Area>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        return <div className='ChartWeather'></div>;
    }
}

export default ChartWeather;
