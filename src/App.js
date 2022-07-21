// import logo from './logo.svg';
// import './App.css';
import Postview from "./PostView/postview";
import LandingPage from "./LandingPage/landing_page";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/postview" component={Postview}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
