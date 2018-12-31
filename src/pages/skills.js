import { graphql } from "gatsby"
import React from "react"

class SkillsComponent extends React.Component {
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
              <tr key={`${row.node.name} ${i}`}>
                <td>{row.node.name}</td>
                <td>{row.node.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default SkillsComponent

export const SkillsQuery = graphql`
  query {
    allSkillsCsv {
      edges {
        node {
          name
          description
        }
      }
      
    }
  }
`
