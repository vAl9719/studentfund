import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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

class SimpleBarChart extends PureComponent {

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data || data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#FFFFFF"/>
        <YAxis stroke="#FFFFFF"/>
        <Tooltip />
        <Legend />
        <Bar dataKey={this.props.benchmark || this.props.sectorone || "pv"} fill="#E11A2C" />
        <Bar dataKey={this.props.portfolio || this.props.sectortwo || "uv"} fill="#FFFFFF" />
      </BarChart>
    );
  }
}

export default SimpleBarChart;
