
import React from "react"
import { graphql } from "gatsby"
import Skill from  '../components/skill'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
 const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="class-container">
      <div className="class">
      <div
          className="class-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h3>Skills</h3>
          {/* Skill list. */
            frontmatter.skills.map(skill => (
          <Skill id={skill.id} key={skill.id}  description={skill.description}/>
        ))}
        
      </div>
    </div>
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
