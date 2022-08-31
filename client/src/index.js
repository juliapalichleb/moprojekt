import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import React from 'react';

import store from "./redux/store";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
