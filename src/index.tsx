import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from 'stores';
import 'configs/i18next-config';
import 'themes/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
