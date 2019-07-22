import React from "react";
import PropTypes from "prop-types";

const ChartBars = ({ data, colors, marginTop, marginLeft }) => {
  return (
    <ul className='bars' style={{ marginTop, marginLeft }}>
      {
        data.map((percent, key) => {
          const { color: background } = colors[key];

          return percent > 0 ?
            <li key={key} style={{width: `${percent}%`, background }}></li> : null;
        })
      }
    </ul>
  );
};

ChartBars.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
};

ChartBars.defaultProps = {
  marginTop: '20px',
  marginLeft: '100px',
};

export default ChartBars;
