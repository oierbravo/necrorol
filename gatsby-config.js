
module.exports = {
    siteMetadata: {
      title: `Necrorol`,
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/class`,
            name: "markdown-classes",
          },
        },
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/skills`,
            name: `SkillsCsv`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/armory`,
            name: `ArmoryCsv`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/traits`,
            name: `TraitsCsv`,
          },
        },
        `gatsby-transformer-csv`,
        {
          resolve: `gatsby-plugin-sass`,
          options: {
            includePaths: ["node_modules"]
          },
        },
      ],
      mapping: {
        "MarkdownRemark.frontmatter.skills": `SkillsCsv`,
      }
  }