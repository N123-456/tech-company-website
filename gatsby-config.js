/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TechNest | Cyber Solutions for Startups`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // you can also specify font weights and styles
            `Outfit:wght@100;200;300;400;500;600;700;800;900`,
            `Quicksand:wght@100;200;300;400;500;600;700;800;900`,
        ],
        display: 'swap'
      }
    },
    
      {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`, // This must match your folder
    },
  },
  ],
};
