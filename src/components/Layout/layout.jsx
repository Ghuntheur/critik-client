import React from 'react';
import PropTypes from 'prop-types';

import MainMenu from '../MainMenu/main-menu';

const Layout = ({ children }) => (
  <>
    <MainMenu />
    <main id="main">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
