import { graphql } from "gatsby"
import React from "react"
import Layout from  '../components/layout'
import { Link } from "gatsby"
class TraitsPage extends React.Component {
  render() {
    const data = this.props.data.allTraitsCsv.edges

    return (
      <Layout>
        <div className="col-sm">
        <Link  to={'/'}>Volver</Link>
        <h1>Traits</h1>
        <ul>
            {data.map((row, i) => (
              <li key={`${row.node.id} ${i}`}>
                <span><strong>{row.node.id}:</strong></span>
                {row.node.description}
              </li>
            ))}
          </ul>
          </div>
       
      </Layout>
    )
  }
}
export default TraitsPage

export const TraitsPageQuery = graphql`
  query {
    allTraitsCsv {
      edges {
        node {
          id
          description
        }
      }
      
    }
  }
`
