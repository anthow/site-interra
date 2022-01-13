/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const histoireTemplate = path.resolve(`src/templates/histoire.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query histoirePagesQuery ($limit: Int!) {
        allDatoCmsHistoireDe(limit: $limit) {
        edges {
          node {
            url
            id
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create article  pages.
    result.data.allDatoCmsHistoireDe.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `histoires/${node.url}`,
        component: histoireTemplate  ,
        context: { url: node.url},
      })
    })
  })
}