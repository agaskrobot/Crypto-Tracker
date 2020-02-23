import React from "react";
import PropTypes from "prop-types";

const Coin = ({ name, value, cap }) => (
  <div>
    Bitcoin
    <ul className="crypto">
      <li className="crypto__acronym">Acronym: {name}</li>
      <li className="crypto__value">Current value: {value} $</li>
      <li className="crypto__cap">Market cap: {cap}</li>
    </ul>
  </div>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default Coin;
