import React, { useContext } from 'react';
import './App.css';
import { ThemeProvider } from "styled-components"
import { theme } from "./assets/styles/Theme"
import { Switch, Route, Redirect } from "react-router-dom"
import { GlobalStyles } from "./assets/styles/GlobalStyle"
import { FormContextProvider } from "./context/formContext"
import { FormContext } from './context/formContext'


import MainPage from './pages/MainPage';
import Order from './pages/Order';
import Sets from './pages/sets';
import { CardContextProvider } from './context/cardContext';
import { UnitsContextProvider } from './context/unitsContext';
import Summary from './pages/summary';
import ScrollToTop from "./components/ScrollToTop";
import {CustomPricesContextProvider} from "./context/customPrices";

function App() {
  // const { setPhoneNumber } = useContext(FormContext);

  return (
    <ThemeProvider theme={theme}>
      <UnitsContextProvider>
        <CardContextProvider>
          <FormContextProvider>
          <CustomPricesContextProvider>
            <ScrollToTop>
            <div className="App">
              <GlobalStyles />
              <Switch>
                <Route path="/sets" component={Sets} />
                <Route path="/order" component={Order} />
                <Route path="/summary" component={Summary} />
                <Route exact path="/" component={MainPage} />
              </Switch>
            </div>
            </ScrollToTop>
          </CustomPricesContextProvider>
          </FormContextProvider>
        </CardContextProvider>
      </UnitsContextProvider>
    </ThemeProvider>
  );
}

export default App;
