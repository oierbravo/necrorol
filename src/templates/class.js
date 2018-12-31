
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
 const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
//    const postNode = this.props.data.markdownRemark;
 //   const frontmatter = postNode.frontmatter;
 console.log(data)
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
          {/* Skill list. */
            frontmatter.skills.map(skill => (
          <Link to={"/skills/" + skill} key={skill}>
            <h1>{skill}</h1>
          </Link>
        ))}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
