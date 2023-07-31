import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = props => {

    const dataArray = props.dataPoints.map(data => {
        return data.value
    });

    const maxValue = Math.max(...dataArray);

    return (
        <div className="chart">
            {props.dataPoints.map(data => {
                return <ChartBar
                    key={data.label}
                    value={data.value}
                    maxValue={maxValue}
                    label={data.label}
                />
            })}
        </div>
    );
};

export default Chart;