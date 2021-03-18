/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require ("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata:{
    title: "Gatsby Trial",
    description: "some description",
    author: "jsven",
    data: ["item 1", "item 2"],
    person: {name: "joko", age:32},

  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
    ,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `img-page`,
      path: `${__dirname}/src/images/`,
    },
  },

  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `qcy60dbn6rs0`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.ACCESS_TOKEN,
    },
  },

],
  
//   plugins: [`gatsby-plugin-styled-components`,
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       name: `img-page`,
//       path: `${__dirname}/src/images/`,
//     },
//   },
// ],
}
