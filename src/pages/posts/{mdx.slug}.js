import * as React from 'react';
import Layout from "../../components/layout";
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SinglePost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageTitle={data.mdx.frontmatter.name}>
            <p><b>{data.mdx.frontmatter.datePublished}</b></p>
            <GatsbyImage image={image}/>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

/*
Gatsby passes the result from this query
into a property called 'data'. We use this
prop above. I believe the query happens before
the page is loaded.
*/
export const query = graphql`
    query ($id: String) {
      mdx(id: {eq: $id}) {
        body
        frontmatter {
          name
          datePublished
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
`;


export default SinglePost;