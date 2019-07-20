import React from "react";
import PropTypes from "prop-types";

const ChartBar = ({ percent, color, description }) => {
  return (
    <span
      style={{ width: `${percent}%`, backgroundColor: color }}
      className="block"
      title={description}>
      <span className="value">{percent}%</span>
    </span>
  );
};

ChartBar.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string
};

ChartBar.defaultProps = {
  description: 'No Description'
};

export default ChartBar;
