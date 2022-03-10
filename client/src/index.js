import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import { App3 } from './App3';

import { store } from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
