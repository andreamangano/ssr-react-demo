import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from './client/routes';
import { ServerStyleSheet } from 'styled-components'

// Utility function to render the content of a given route
export default (req, store, context) => {
  const sheet = new ServerStyleSheet();
  // Render to string the app structure and the given page content
  // The collectStyles method wraps your element in the StyleSheetManager provider.
  const content = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  ));
  // The sheet.getStyleTags() returns a string of multiple <style> tags to append in to the page head
  const styleTags = sheet.getStyleTags();
  // renderStatic() uses the all tags loaded in the component associated with the given route
  const helmet = Helmet.renderStatic();
  // Inject all the meta tags inside the page head
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styleTags}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};