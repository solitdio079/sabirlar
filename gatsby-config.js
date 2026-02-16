/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kastamonu Nakliye & Vinç Hizmetleri | Sabırlar`,
    description: `Sabırlar, Kastamonu merkezli nakliye, hurda taşımacılığı ve vinç kiralama hizmetleri sunar.`,
    siteUrl: `https://sabirlar.com`,
    image: `/app-img.png`,
    author: `Sabırlar`,
    keywords: [
      "sabırlar lojistik",
      "kastamonu lojistik",
      "kastamonu nakliye",
      "kastamonu vinç hizmeti",
      "hurda taşımacılığı",
      "lojistik firması kastamonu",
      "tır nakliye kastamonu",
      "vinç kiralama kastamonu"
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
};
