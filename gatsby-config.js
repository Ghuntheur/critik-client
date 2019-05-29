module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `
          @import "colors.scss";
          @import "mixins.scss";
        `,
        includePaths: [`${__dirname}/src/styles/variables`]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Arial`, `Montserrat`]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'z7cv6nys',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        token:
          'skYEtCI1eGIJHMG3yMKHM4X950pcGyECWAkddUqREQbQdc3bxQRhMlbhqyWl3DtCTayN3aVboskf6B4WIxUroRuLdRXwQT9Be2xTpu52ZB6e7lxGeMX7e0hpfVdhhiE2bQP5hJnEbbJu5DRDecIV9ltjnBQB7EoqlcoSKwPjnT4OCZshS25l'
      }
    }
  ]
};
