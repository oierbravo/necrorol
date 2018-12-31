import { graphql } from "gatsby"
import React from "react"
import './index.scss'
import { Link } from "gatsby"

class ClassesComponent extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    console.log(data)
    return (
      <div>
        <ul>
          {data.map((row, i) => (
                <li><Link  to={'/class/' + row.node.frontmatter.id}>{row.node.frontmatter.title}</Link></li>
              ))}
          </ul>
          </div>
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
