import React from "react";
import {Card} from "antd";

class Box extends React.Component {
    render() {
        return (
          <Card style={{ width: 375, height: 150}}>
          <ul>
            <div className="cost"><p>Cost: {this.props.cost}</p></div>
            <div className="number"><p>Number of stocks: {this.props.number}</p></div>
            <div className="holdings"><p>Holdings: {this.props.holdings}</p></div>
          </ul>
        </Card>
        );
    }
}

export default Box;
