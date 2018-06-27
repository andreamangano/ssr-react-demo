import React from 'react';
import { renderRoutes } from 'react-router-config';
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}
`;

const App = ({ route }) => {
  // Render the sub routes
  return (
    <div>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
