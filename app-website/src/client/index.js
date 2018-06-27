import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './store/reducers';
// Set a axios instance for all api requests
const axiosInstance = axios.create({
  baseURL: '/api'
});
// Create the store with a initial redux state (Passed from the server during the page rendering)
// Apply the Thunk middleware to handle the asynchronous API calls
// Pass to thunk an extra parameter (the pre configured axios instance)
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
// Use hydrate() method (instead of the render() method) to hydrate a container whose HTML contents were rendered by ReactDOMServer.
// React will attach event listeners to the existing markup.
// Use the Redux Provider to allow all app components to access the store
// Create the app routing by using a config object and the renderRoutes method to render them
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
