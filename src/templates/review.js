import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import MainContent from '../components/MainContent/main-content';
import AuthorSummary from '../components/AuthorSummary/author-summary';

import './../styles/templates/review.scss';

export const query = graphql`
  query($slug: String!) {
    sanityReview(slug: { current: { eq: $slug } }) {
      title
      _rawBody
      score
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
      author {
        name
        bio
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
`;

export default ({ data }) => (
  <Layout>
    <Header background={data.sanityReview.image}>
      {data.sanityReview.title}
    </Header>
    <MainContent>
      <BlockContent
        blocks={data.sanityReview._rawBody}
        renderContainerOnSingleChild={true}
        className="body"
        projectId="z7cv6nys"
        dataset="production"
      />
      <div className="score">
        Note : <span>{data.sanityReview.score}</span> / 20
      </div>
      <AuthorSummary {...data.sanityReview.author} />
    </MainContent>
  </Layout>
);
