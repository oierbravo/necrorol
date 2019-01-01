import { graphql } from "gatsby"
import React from "react"
import Layout from  '../components/layout'
class Skills extends React.Component {
  render() {
    const data = this.props.data.allSkillsCsv.edges
    console.log(data)
    return (
      <Layout>
        <ul>
            {data.map((row, i) => (
              <li key={`${row.node.id} ${i}`}>
                <span><strong>{row.node.id}:</strong></span>
                {row.node.description}
              </li>
            ))}
          </ul>
      </Layout>
    )
  }
}
export default Skills

export const SkillsQuery = graphql`
  query {
    allSkillsCsv {
      edges {
        node {
          id
          description
        }
      }
      
    }
  }
`
