import * as React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';


const PostsPage = ({ data }) => {
    return (
        <Layout pageTitle="Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                    <h2>
                      <Link to={`/posts/${node.slug}`}>
                        {node.frontmatter.name}
                      </Link>
                    </h2>
                    <p>Posted {node.frontmatter.datePublished}</p>
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
          slug
        }
      }
    }
`;

export default PostsPage;
