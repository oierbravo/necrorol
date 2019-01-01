import { graphql } from "gatsby"
import React from "react"
import './index.scss'
class Skills extends React.Component {
  render() {
    const data = this.props.data.allSkillsCsv.edges
    console.log(data)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.id} ${i}`}>
                <td>{row.node.id}</td>
                <td>{row.node.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
