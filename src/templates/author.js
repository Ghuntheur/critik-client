import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import MainContent from '../components/MainContent/main-content';
import ReviewSummary from '../components/ReviewSummary/review-summary';

export const query = graphql`
  query($slug: String!) {
    sanityAuthor(slug: { current: { eq: $slug } }) {
      bio
      name
    }
    allSanityReview(
      filter: { author: { slug: { current: { eq: $slug } } } }
      sort: { fields: [_createdAt], order: DESC }
    ) {
      edges {
        node {
          title
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
        }
      }
    }
  }
`;

export default ({ data, pageContext }) => (
  <Layout>
    <Header>Les critiques de "{data.sanityAuthor.name}"</Header>
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
