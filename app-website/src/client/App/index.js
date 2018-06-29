import React from 'react'
import { renderRoutes } from 'react-router-config'
import { injectGlobal } from 'styled-components'
import { globalStyle } from '../styles/index'
import { Link } from 'react-router-dom'
import reset from 'styled-reset'
import {
  BaseStyled,
  NavStyled,
} from './styled'

injectGlobal`
  ${reset}
  ${globalStyle}
`;

const App = ({ route }) => {
  // Render the sub routes
  return (
    <BaseStyled>
      <NavStyled>
        <Link to="/">Home</Link>
      </NavStyled>
      {renderRoutes(route.routes)}
    </BaseStyled>
  );
};

export default {
  component: App
};
