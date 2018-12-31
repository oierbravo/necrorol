import { graphql } from "gatsby"
import React from "react"

class ClassesComponent extends React.Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges
    console.log(data)
    return (
      <ul>
      {data.map((row, i) => (
              <li key={`${row.node.frontmatter.title} ${i}`}>
                <span>{row.node.frontmatter.title}</span>
              </li>
            ))}
      </ul>
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
          }
        }
      }
      
    }
  }
`
