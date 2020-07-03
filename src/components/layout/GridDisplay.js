import React from "react";
import {WidthProvider, Responsive} from "react-grid-layout";
import _ from "lodash";
import SimpleLineChart from "../widgets/SimpleLineChart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class GridDisplay extends React.Component {
    static defaultProps = {
    className: "layout",
    isDraggable: true,
    isResizable: true,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };
  state = {
    items: [0, 1, 2, 3, 4].map(function(i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        add: i === list.length - 1
      };
    }),
    newCounter: 0,
    widgetDropdown: ""
  };
  createElement = el => {
      console.log(el);
      const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.i;

    let WidgetRender = SimpleLineChart;
    return (
      <div
        className="react-grid-item"
        key={i}
        data-grid={el}
        style={{
          padding: "1rem",
        }}
      >
        <WidgetRender {...el.dataProps} />
        <div
          className="remove"
          style={removeStyle}
          onClick={() => this.onRemoveItem(i)}
        >
          x
        </div>
      </div>);
  };
    generateDOM = () => {
    return _.map(this.state.layouts[this.state.currentBreakpoint], l => {
      return (
        <div key={l.i} className={l.static ? "static" : ""}>
          <div className="hide-button" onClick={this.onPutItem.bind(this, l)}>
            &times;
          </div>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {l.i}
            </span>
          ) : (
            <span className="text">{l.i}</span>
          )}
        </div>
      );
    });
  };
  handleWidgetDropdownChange = (e, { value }) => {
    this.setState({ widgetDropdown: value });
  };

  handleAddWidget = (type, dataProps) => {
    this.setState({
      // Add a new item - must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
        widgetType: type,
        dataProps: dataProps
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1,
      toolbox: { lg: [] }
    });
  };

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange = (breakpoint, cols) => {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  };

  onLayoutChange = layout => {
    this.setState({ layout: layout });
  };

  onRemoveItem = i => {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  };

  render() {

    return (
      <div>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          style={{
            margin: "1rem"
          }}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default GridDisplay;
