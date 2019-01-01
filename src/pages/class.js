import { graphql } from "gatsby"
import React from "react"
import Layout from  '../components/layout'
import { Link } from "gatsby"
class ClassesComponent extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    console.log(data)
    return (
      <Layout>
        <div className="col-sm">
        <Link  to={'/'}>Volver</Link>
        <ul>
          {data.map((row, i) => (
                <li key={i}><Link  to={'/class/' + row.node.frontmatter.id}>{row.node.frontmatter.title}</Link></li>
              ))}
          </ul>
          </div>
          </Layout>
    )
  }
}
export default ClassesComponent

export const ClassesQuery = graphql`
  query {
    allMarkdownRemark{
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
`
