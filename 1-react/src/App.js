import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.colors = [
      {
        description: 'Strongly Disagree',
        color: "#c51b7d"
      },
      {
        description: 'Disagree',
        color: "#de73aa"
      },
      {
        description: 'Neutral/Neither agree nor disagree',
        color: "#d1d1d1"
      },
      {
        description: 'Agree',
        color: "#83b954"
      },
      {
        description: 'Strongly agree',
        color: "#4d9221"
      }
    ];

    this.state = {
      dataChart: [
        {
          prompt: "My issue was resolved in a timely manner",
          data: [1, 14, 24, 3, 4]
        },
        {
          prompt: "The representative understood me",
          data: [0, 3, 23, 15, 10]
        },
        {
          prompt: "I would recommend the service to others",
          data: [8, 7, 8, 9, 5]
        }
      ]
    };
  }

  renderChartData = data => {
    return data.map((percent, key) => {
      const { description, color } = this.colors[key];

      if (percent === 0) {
        return false;
      }

      return (
        <span key={key} style={{ width: `${percent}%`, backgroundColor: color }} className="block" title={description}>
          <span className="value">{percent}%</span>
        </span>
      );
    });
  };

  render() {
    return (
      <figure>
        <div className="y-axis">
          <h3>Y-Axis</h3>
        </div>

        <div className="graphic">
          {
            this.state.dataChart.map((chart, key) => {
              return (
                <div key={key} className="row">
                  <h6>{ chart.prompt }</h6>
                  <div className="chart">
                    { this.renderChartData(chart.data) }
                  </div>
                </div>
              );
            })
          }
        </div>

        <div className="x-axis">
          <h3>X-Axis</h3>
          <ul className="legend">
            {
              this.colors.map((color, key) =>
                <li key={key}>
                  <span className='color-bullet' style={{backgroundColor: color.color}}></span>
                  {color.description}
                </li>
              )
            }
          </ul>
        </div>
      </figure>
    );
  }
}

export default App;
