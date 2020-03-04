import React from "react";
import PropTypes from "prop-types";

import styles from "./Coin.module.css";
import CoinListCell from "../CoinListCell/CoinListCell";
import CoinListRow from "../CoinListRow/CoinListRow";

const Coin = ({ symbolPath, change, name, price, cap, supply, acronym }) => (
  <CoinListRow>
    <CoinListCell isLarge>
      <img
        src={symbolPath}
        alt={`${name}'s symbol`}
        className={styles["coin-symbol"]}
      />
      <div>{name}</div>
    </CoinListCell>
    <CoinListCell>{price}</CoinListCell>
    <CoinListCell>
      <p
        className={
          change >= 0
            ? styles["percent-change--plus"]
            : styles["percent-change--minus"]
        }
      >
        {change} %
      </p>
    </CoinListCell>
    <CoinListCell>{cap}</CoinListCell>
    <CoinListCell>
      {supply}
      {` ${acronym}`}
    </CoinListCell>
  </CoinListRow>
);

Coin.propTypes = {
  symbolPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  supply: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  acronym: PropTypes.string.isRequired,
  change: PropTypes.number.isRequired,
};

export default Coin;
