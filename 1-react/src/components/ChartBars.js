import React from "react";
import PropTypes from "prop-types";

const ChartBars = ({ data, colors, marginTop }) => {
  return (
    <ul className='bars' style={{ marginTop }}>
      {
        data.map((percent, key) => {
          const { color } = colors[key];

          return percent > 0 ?
            <li key={key} style={{width: `${percent}%`, background: color}}></li> : null;
        })
      }
    </ul>
  );
};

ChartBars.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  marginTop: PropTypes.string,
};

ChartBars.defaultProps = {
  marginTop: '20px'
};

export default ChartBars;
