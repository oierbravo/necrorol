
import React from "react"
import { graphql } from "gatsby"
import Skill from  '../components/skill'
import Layout from  '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
 const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="col-sm table">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
        <h3>Skills</h3>
          {/* Skill list. */
            frontmatter.skills.map(skill => (
          <Skill id={skill.id} key={skill.id}  description={skill.description}/>
        ))}
          </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ClassById($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        title
        id
        skills {
          id
          description
        }
      }
    }
  }
`;
