import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import CoinList from "../components/CoinList/CoinList";
import Header from "../components/Header/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/coin-list" exact component={CoinList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
