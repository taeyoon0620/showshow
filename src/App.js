import './App.css';
import { React, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./theme/themeProvider";
import { GlobalStyle } from "./theme/globalstyle";
import { Suspense } from "react";
import Main from "./Main";
import Sub from "./Sub";
import { ThemeContext } from "./context/themeProvider";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/sub" component={Sub}/>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;