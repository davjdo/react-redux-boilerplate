import React from 'react';
import Aux from '../Aux/Aux';

const Layout = props => (
  <Aux>
    <div>Toolbar...</div>
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
