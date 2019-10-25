import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";

import Landing from "./pages/landing";
import SingleMode from "./pages/single";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  #root,
  body {
    width: 100vw;
    height: 100vh;
  }
`;

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={{}}>
    <>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/single" exact={true} component={SingleMode} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </>
  </ThemeProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
