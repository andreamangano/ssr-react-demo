import 'babel-polyfill'

// Load development env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from './client/store/reducers'
import Routes from './client/Routes'
import renderer from './renderer'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  '/api',
  proxy(process.env.API_BASE_URL, {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = `${process.env.SERVER_BASE_URL}/api`;
      return opts;
    }
  })
);

// Use the folder public as static assets folder
app.use(express.static('public'));

// Match all routes
app.get('*', (req, res) => {

  // Create a specific instance of axios with the base url api param
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL
  });

  // Create the store passing the axiosInstance to thunk middleware
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  const promises = matchRoutes(Routes, req.path)
    // Create an array of promises to load the needed data for the given route path
    // The match property within each matchRoutes item has passed into your loadData function
    // to get the url params from the page component (client)
    .map(({ route, match }) => route.loadData ? route.loadData(store, match) : null)
    // Wrap every promise inside an other one that will be always resolved
    // This way we can guarantee the the promises chain doesn't reject if a single promise rejects
    .map(promise => {
      if (promise) {
        return new Promise(resolve => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises)
    .then(() => {
      const context = {};
      // Render the page content for the given route
      const content = renderer(req, store, context);
      // If there is set a context url make a URL redirection (the route is moved permanently)
      if (context.url) return res.redirect(301, context.url);
      // If no route is found send a response with a 404 status.
      if (context.notFound) res.status(404);
      // Send the content as request response
      res.send(content);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
