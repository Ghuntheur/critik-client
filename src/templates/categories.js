import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import MainContent from '../components/MainContent/main-content';
import ReviewSummary from '../components/ReviewSummary/review-summary';

export const query = graphql`
  query($type: String!) {
    allSanityReview(
      filter: { type: { eq: $type }, published: { eq: true } }
      sort: { fields: [_createdAt], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          title
          type
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          author {
            name
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

const Category = ({ data, pageContext }) => (
  <Layout>
    <Header className={pageContext.type}>
      {pageContext.type === 'movies' ? 'Films' : 'Séries'}
    </Header>
    <MainContent>
      <ul className="review-container">
        {data.allSanityReview.edges.map(({ node }) => (
          <li key={node.id} className="review">
            <ReviewSummary {...node} />
          </li>
        ))}
      </ul>
    </MainContent>
  </Layout>
);

export default Category;
