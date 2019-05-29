import React from 'react';
import BackgroundImg from 'gatsby-background-image';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './header.scss';

const Header = ({ children, className, background, ...rest }) => {
  const classes = classnames('header', className, { image: background });

  return background ? (
    <BackgroundImg
      Tag="header"
      className={classes}
      fluid={background.asset.fluid}
    >
      <h1 className="title">{children}</h1>
    </BackgroundImg>
  ) : (
    <header className={classes} {...rest}>
      <h1 className="title">{children}</h1>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired
};

export default Header;
