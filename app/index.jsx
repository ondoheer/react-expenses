/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import './style.scss';


import { createBrowserHistory } from 'history';

export default createBrowserHistory();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
