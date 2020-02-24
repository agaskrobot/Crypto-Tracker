import React from "react";
import PropTypes from "prop-types";

import Coin from "./Coin/Coin";
import { useCoinList } from "../../api/coinMarketCap";

const CoinList = () => {
  const [coins] = useCoinList();
  console.log("im here")

  if (coins.length === 0) {
    return <p>Brak wyników dla wprowadzonej frazy.</p>;
  }
  return coins.map((coin, i) => <Coin {...coin} key={coin.name} />);
};
// CoinList.propTypes = {
//   cryptos: PropTypes.array
// };
export default CoinList;
