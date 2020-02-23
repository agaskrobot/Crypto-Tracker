import axios from 'axios/index';

const coinList = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v2/',
});

const getCoinList = (limit = 100) =>
coinList.get(`ticker/?limit=${limit}`);

export default getCoinList;