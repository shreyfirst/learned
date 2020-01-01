module.exports = {
  siteMetadata: {
    title: `learned - Kat Huang`,
    url: `https://katmh.com/learned`,
    description: `chronicling something I've learned each day`
  },
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: [
          'https://v2-api.sheety.co/516dddcf7d74d7012cc18be721885dbd/api/sheet1'
        ]
      }
    }
  ]
}
