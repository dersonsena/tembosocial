import React from "react";
import PropTypes from "prop-types";

const ChartLabels = ({ colors }) => {
  return (
    <ul className="legend">
      {colors.map((color, key) => (
        <li key={key}>
          <span className="color-bullet" style={{ backgroundColor: color.color }} />
          {color.description}
        </li>
      ))}
    </ul>
  );
};

ChartLabels.propTypes = {
  colors: PropTypes.array.isRequired
};

export default ChartLabels;
