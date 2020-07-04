import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

class SimpleLineChart extends PureComponent {

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.data || data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
      
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.props.x || "name"} stroke="#FFFFFF"/>
        <YAxis stroke="#FFFFFF"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={this.props.benchmark || this.props.sectorone || "pv"} stroke="#E11A2C" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey={this.props.portfolio || this.props.sectortwo || "uv"} stroke="#FFFFFF" />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
