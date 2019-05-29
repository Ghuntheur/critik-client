/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allSanityReview {
        edges {
          node {
            id
            type
            slug {
              current
            }
          }
        }
      }
      allSanityAuthor {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (results.errors) throw new Error(results.errors);

  const reviews = results.data.allSanityReview.edges.map(({ node }) => node);
  const authors = results.data.allSanityAuthor.edges.map(({ node }) => node);

  reviews.forEach(review => {
    createPage({
      path: `${review.type}/${review.slug.current}`,
      component: require.resolve('./src/templates/review.js'),
      context: {
        slug: review.slug.current
      }
    });
  });

  authors.forEach(author => {
    createPage({
      path: `authors/${author.slug.current}`,
      component: require.resolve('./src/templates/author.js'),
      context: {
        slug: author.slug.current
      }
    });
  });

  ['movies', 'series'].forEach(type =>
    createPage({
      path: type,
      component: require.resolve('./src/templates/categories.js'),
      context: {
        type
      }
    })
  );
};
