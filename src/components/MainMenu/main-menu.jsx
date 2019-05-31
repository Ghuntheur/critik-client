import React from 'react';
import { Link } from 'gatsby';

import './main-menu.scss';

const MainMenu = () => {
  const links = [
    { to: '/series', label: 'Séries' },
    { to: '/movies', label: 'Films' }
  ];

  return (
    <header className="main-menu">
      <nav className="navigation">
        <div className="home">
          <Link to="/">Critik.</Link>
        </div>
        <ul className="navigation-list">
          {links.map(link => (
            <li key={link.label} className="navigation-item">
              <Link
                to={link.to}
                activeClassName="active"
                partiallyActive={true}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div />
      </nav>
    </header>
  );
};

export default MainMenu;
