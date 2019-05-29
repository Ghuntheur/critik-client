import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './author-summary.scss';

const AuthorSummary = ({ name, bio, slug, image }) => (
  <div className="author-summary">
    <div className="image-container">
      <Img fluid={image.asset.fluid} style={{ height: '100%' }} />
    </div>
    <div className="infos">
      <h2 className="name">
        <Link to={`/authors/${slug.current}`}>{name}</Link>
      </h2>
      <p className="bio">{bio}</p>
    </div>
  </div>
);

export default AuthorSummary;
