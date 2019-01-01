const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const id = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `id`,
      value: id,
    })
    
  }
  //console.log(node.sourceInstanceName);
}
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const classTemplate = path.resolve(`src/templates/class.js`)

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              id
            }
          }
        }
      }
    }
  `).then(result => {
    console.log(result.data.allMarkdownRemark.edges)
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node)
      createPage({
        path: `/class/${node.frontmatter.id}/`,
        component: classTemplate,
        context: {
            id: node.frontmatter.id
          }
      })
    })
  })
}