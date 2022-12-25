import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { StyledEngineProvider } from "@mui/styled-engine";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  // <Provider store={store}>
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
  // </Provider>
  // </React.StrictMode>
);
