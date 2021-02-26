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

function App() {
  // const { setPhoneNumber } = useContext(FormContext);

  return (
    <ThemeProvider theme={theme}>
      <UnitsContextProvider>
        <CardContextProvider>
          <FormContextProvider>
            <div className="App">
              <GlobalStyles />
              <Switch>
                <Route path="/sets" component={Sets} />
                {/* <Route>
                  {setPhoneNumber ? <Redirect to="/sets" /> : <MainPage />}
                </Route> */}
                <Route path="/order" component={Order} />
                <Route exact path="/" component={MainPage} />
              </Switch>
            </div>
          </FormContextProvider>
        </CardContextProvider>
      </UnitsContextProvider>
    </ThemeProvider>
  );
}

export default App;
