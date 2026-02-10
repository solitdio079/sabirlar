/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
   
    title: `öz SABIRLAR`,
    description: `öz SABIRLAR - Hurda & Nakliye & Vinç - Timur Sabırlar Ltd.Şti`,
    image: `/app-img.png`,
    siteUrl: `https://sabirlar.com/`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    `gatsby-transformer-sharp`, // Needed for dynamic images
    
  ],
}
