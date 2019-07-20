import React from "react";
import "./App.css";
import ChartLabels from "./components/ChartLabels";
import colors from "./data/colors";
import dataChart from "./data/dataChart";
import Chart from "./components/Chart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataChart };
  }

  render() {
    return (
      <figure>
        <div className="y-axis">
          <h3>Y-Axis</h3>
        </div>

        <div className="graphic">
          {this.state.dataChart.map((chart, key) => (
            <Chart key={key} data={chart} colors={colors} />
          ))}
        </div>

        <div className="x-axis">
          <h3>X-Axis</h3>
          <ChartLabels colors={colors} />
        </div>
      </figure>
    );
  }
}

export default App;
