
module.exports = {
    siteMetadata: {
      title: `Necrorol`,
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content`,
            name: "markdown-pages",
          },
        },
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/skills`,
            name: `csv`,
          },
        },
        `gatsby-transformer-csv`
      ]
  }