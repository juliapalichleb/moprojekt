import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import React from 'react';

import store from "./redux/store";
import App from './App';
import './index.css';
import { theme1 } from "./style/theme";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme(theme1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
          <BrowserRouter>
             <App />
          </BrowserRouter>
          </Provider>
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
