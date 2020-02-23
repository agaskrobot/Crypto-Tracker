import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Coin from "../components/CoinList/Coin/Coin";
import Header from "../components/Header/Header";

export const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/coin" exact component={Coin} />
    </Switch>
  </BrowserRouter>
);

export default App;
