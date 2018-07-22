module.exports = {
  
  siteMetadata: {
    title: 'LaGlu',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recettes`,
        path: `${__dirname}/src/recettes/`,
      },
    },
  ],
}
