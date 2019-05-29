import React from 'react';
import PropTypes from 'prop-types';

import './main-content.scss';

const MainContent = ({ children }) => (
  <section className="main-content">{children}</section>
);

MainContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContent;
