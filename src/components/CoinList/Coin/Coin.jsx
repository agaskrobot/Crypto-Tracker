import React from "react";
import PropTypes from "prop-types";

const Coin = ({ name, price, cap, symbolPath }) => (
  <div>
    Bitcoin
    <ul className="crypto">
      <li className="crypto__acronym">{symbolPath}</li>
      <li className="crypto__acronym">Acronym: {name}</li>
      <li className="crypto__value">Current value: {price} $</li>
      <li className="crypto__cap">Market cap: {cap}</li>
    </ul>
  </div>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  symbolPath:PropTypes.any.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default Coin;
