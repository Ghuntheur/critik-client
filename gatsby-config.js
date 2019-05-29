module.exports = {
  siteMetadata: {
    title: `Critik`
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
        name: `Critik.`,
        short_name: `critik`,
        start_url: `/`,
        background_color: `#de5460`,
        theme_color: `#de5460`,
        display: `minimal-ui`,
        icon: `src/images/pwa.png` // This path is relative to the root of the site.
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
