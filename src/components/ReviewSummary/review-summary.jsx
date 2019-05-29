import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './review-summary.scss';

const ReviewSummary = ({ type, slug, title, image }) => (
  <div className="review-summary">
    <div className="img-container">
      <Img fluid={image.asset.fluid} />
    </div>
    <div className="card-main">
      <h4 className="type">{type === 'movies' ? 'Film' : 'Série'}</h4>
      <h1 className="title">{title}</h1>
      <div className="btn">
        <Link className="link" to={`/${type}/${slug.current}`}>
          Lire
        </Link>
      </div>
    </div>
  </div>
);

export default ReviewSummary;
