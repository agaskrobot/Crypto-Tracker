export function mapFetchedCryptos(fetchedCryptos) {
  return Object.keys(fetchedCryptos).map(cryptoId => {
    const crypto = fetchedCryptos[cryptoId];

    const { name, symbol: acronym, id, circulating_supply: supply } = crypto;
    const symbolPath = getIconPath(id);
    const quotesInUsd = crypto.quote.USD;
    const { price, market_cap: cap, percent_change_1h: change } = quotesInUsd;

    return { name, acronym, supply, symbolPath, price, cap, change };
  });
}

function getIconPath(id) {
  return `https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`;
}
