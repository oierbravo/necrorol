
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";

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
          {/* Skill list. */
            frontmatter.skills.map(skill => (
          <Link to={"/skills/" + skill} key={skill}>
            <h1>{skill}</h1>
          </Link>
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
        skills
      }
    }
  }
`;
