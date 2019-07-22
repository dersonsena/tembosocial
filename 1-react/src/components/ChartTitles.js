import React from "react";
import PropTypes from "prop-types";

const ChartTitles = ({ titles }) => {
  return (
    <ul className="chart-titles">
      {titles.map((title, key) => <li key={key}>{title}</li>)}
    </ul>
  );
};

ChartTitles.propTypes = {
  titles: PropTypes.array.isRequired
};

export default ChartTitles;
