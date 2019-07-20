import React from "react";
import PropTypes from 'prop-types';
import ChartBar from "./ChartBar";

const Chart = ({ data, colors }) => {
  return (
    <div className="row">
      <h6>{data.prompt}</h6>
      <div className="chart">
        {data.data.map((percent, key) => {
          if (percent === 0) {
            return false;
          }

          const { description, color } = colors[key];

          return (
            <ChartBar
              key={key}
              percent={percent}
              color={color}
              description={description} />
          );
        })}
      </div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Chart;
