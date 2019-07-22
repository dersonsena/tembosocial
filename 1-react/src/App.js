import React from "react";
import "./App.css";
import { dataChart, titles, values } from "./data/dataChart";
import colors from './data/colors';
import ChartTitles from "./components/ChartTitles";
import ChartBars from "./components/ChartBars";
import ChartLabels from "./components/ChartLabels";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataChart, titles, values };
  }

  getBarMarginTop = key => key === 0 ? '20px' : ((key + 1) * 36) + 'px';

  render() {
    return (
      <div className='row'>
        <div className='left-col'>
          <ChartTitles titles={this.state.titles()} />
        </div>
        <div className='right-col'>
          <div className='graphic'>
            <div className="body">
              <div className='blocks'></div>
              <div className='blocks'></div>
              <div className='blocks'></div>
              <div className='blocks'></div>
              {this.state.values().map((data, key) =>
                <ChartBars
                  key={key}
                  colors={colors}
                  marginTop={this.getBarMarginTop(key)}
                  data={data} />
              )}
            </div>
            <ul className="legends">
              <li>100%</li>
              <li>50%</li>
              <li>0%</li>
              <li>50%</li>
              <li>100%</li>
            </ul>
          </div>
          <ChartLabels colors={colors} />
        </div>
      </div>
    );
  }
}

export default App;
