import React from "react";
import {Card} from "antd";

class Box extends React.Component {
    render() {
        return (
          <Card title="Box Title" style={{ width: 450}}>
          <ul>
          <li>Card content</li>
          <li>Card content</li>
          <li>Card content</li>
          </ul>
        </Card>
        );
    }
}

export default Box;
