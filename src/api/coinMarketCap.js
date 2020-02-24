import { useState, useEffect, useReducer } from "react";
import CoinMarketCap from "coinmarketcap-api";

const coinsActionTypes = {
  updateCoins: "UPDATE_COINS",
  resetCoins: "RESET_COINS"
};

const initialState = { coins: [] };

const coinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case coinsActionTypes.resetCoins: {
      return { ...initialState };
    }
    case coinsActionTypes.updateCoins: {
      return { ...state, coins: payload };
    }
    default:
      return state;
  }
};

export function mapFetchedCryptos(fetchedCryptos) {
  return Object.keys(fetchedCryptos).map(cryptoId => {
    const crypto = fetchedCryptos[cryptoId];

    const { name, symbol: acronym, id, circulating_supply: supply } = crypto;
    const symbolPath = getIconPath(id);
    const quotesInUsd = crypto.quote.USD;
    const { price, market_cap: cap} = quotesInUsd;

    return { name, acronym, supply, symbolPath, price, cap };
  });
}
function getIconPath(id) {
  return "https://s2.coinmarketcap.com/static/img/coins/32x32/1.png";
}

const API_KEY= process.env.REACT_APP_API_KEY

export function useCoinList() {
  const [{ coins }, dispatch] = useReducer(coinReducer, initialState);
  const [loading, setLoading] = useState(false);

  const client = new CoinMarketCap(API_KEY);

  // TODO: The coins are loaded when there are no coins.
  useEffect(() => {
    if (loading) {
      return;
    }

    if (coins.length === 0) {
      setLoading(true);
      client
        .getTickers({ limit: 10 })
        .then(({ data }) => {
          dispatch({ type: coinsActionTypes.updateCoins, payload: mapFetchedCryptos(data) });
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [coins, loading]);

  return [coins, loading];
}
