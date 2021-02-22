import './App.css';
import { ThemeProvider } from "styled-components"
import { theme } from "./assets/styles/Theme"
import { Switch, Route } from "react-router-dom"
import { GlobalStyles } from "./assets/styles/GlobalStyle"
import { FormContextProvider } from "./context/formContext"


import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormContextProvider>
        <div className="App">
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </div>
      </FormContextProvider>``
    </ThemeProvider>
  );
}

export default App;
