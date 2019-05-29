import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import MainContent from '../components/MainContent/main-content';
import ReviewSummary from '../components/ReviewSummary/review-summary';
import SEO from '../components/Seo/seo';

const IndexPage = () => {
  const reviews = useStaticQuery(graphql`
    query IndexPageQuery {
      allSanityReview(
        sort: { fields: [_createdAt], order: DESC }
        filter: { published: { eq: true } }
        limit: 10
      ) {
        edges {
          node {
            title
            type
            author {
              name
              slug {
                current
              }
            }
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `).allSanityReview.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO />
      <Header>Critik</Header>
      <MainContent>
        <ul className="review-container">
          {reviews.map(review => (
            <li key={review.slug.current} className="review">
              <ReviewSummary {...review} />
            </li>
          ))}
        </ul>
      </MainContent>
    </Layout>
  );
};

export default IndexPage;
