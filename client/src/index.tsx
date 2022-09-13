import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import React from 'react';

import { theme1 } from "./style/theme";
import {store} from "./redux/store";
import './index.css';
import App from './App';

// @ts-ignore
const theme = createTheme(theme1);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
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
