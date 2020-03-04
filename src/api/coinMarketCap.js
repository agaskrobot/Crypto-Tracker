import { useState, useEffect, useReducer } from "react";
import CoinMarketCap from "coinmarketcap-api";

import {mapFetchedCryptos} from "../lib/helpers"

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

const API_KEY= process.env.REACT_APP_API_KEY

// Custom hook for geting coins
export function useCoinList() {
  const [{ coins }, dispatch] = useReducer(coinReducer, initialState);
  const [loading, setLoading] = useState(false);

  const client = new CoinMarketCap(API_KEY);

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
