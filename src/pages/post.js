import * as React from 'react'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';


const PostsPage = ({ data }) => {
    return (
        <Layout pageTitle="Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.name}</h2>
                        <p>Posted{node.frontmatter.datePublished}</p>
                        <MDXRenderer>{node.body}</MDXRenderer>
                    </article>
                ))
            }
            <span>🫣</span>
        </Layout>
    )
}

export const query = graphql`
    query {
      allMdx(sort: {fields: frontmatter___datePublished, order: DESC}) {
        nodes {
          frontmatter {
            name
            datePublished
          }
          id
          body
        }
      }
    }
`;

export default PostsPage;
