import React, { PureComponent } from 'react';
import { Treemap } from 'recharts';

const data = [
          
          {
            name: 'data',
            children: [
              { name: 'Data', size: 20544 },
              { name: 'DataList', size: 20000 },
              { name: 'DataSprite', size: 15349 },
              { name: 'NodeSprite', size: 19382 },
        ]
        }
        ];


class Heatmap extends PureComponent {

  render() {
    return (
      <Treemap
        width={400}
        height={200}
        data={this.props.holdings || data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#666666"
      />
    );
  }
}

export default Heatmap;
