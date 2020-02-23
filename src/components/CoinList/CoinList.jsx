import React from "react";
import PropTypes from "prop-types";
import Coin from "./Coin/Coin";

const CoinList = ({ cryptos }) => {
  if (cryptos.length === 0) {
    return <p>Brak wyników dla wprowadzonej frazy.</p>;
  }
  return cryptos.map((crypto, i) => <Coin {...crypto} key={crypto.acronym} />);
};
CoinList.propTypes = {
  cryptos: PropTypes.array
};
