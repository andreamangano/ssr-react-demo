import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/store/reducers'

export default req => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL
  });

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
};