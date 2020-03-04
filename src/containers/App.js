import React, { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CoinList from "../components/CoinList/CoinList";

import { useCoinList } from "../api/coinMarketCap";

export const App = () => {
  const [coins, loading] = useCoinList();
  const [matchedCryptos, setMatchedCryptos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    function isMatched(phrase) {
      const regex = new RegExp(`\\b${phrase}.*\\b`, "i");
      return function(coins) {
        return Object.values(coins).some(val => regex.test(val));
      };
    }

    const isMatchedWithSearchQuery = isMatched(searchQuery);
    const matchedCryptos = coins.filter(isMatchedWithSearchQuery);
    setMatchedCryptos(matchedCryptos);
  }, [searchQuery]);

  return (
    <div>
      <Header cap={12} />
      <SearchBar
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <CoinList
        cryptos={searchQuery !== "" ? matchedCryptos : coins}
        loading={loading}
      />
    </div>
  );
};

export default App;
