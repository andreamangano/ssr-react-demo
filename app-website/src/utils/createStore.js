import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/store/reducers/index';

export default req => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    // headers: { cookie: req.get('cookie') || '' }
  });

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};