import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';


const PostsPage = ({ data }) => {
    return (
        <Layout pageTitle="Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
            <span>🫣</span>
        </Layout>
    )
}

export const query = graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
`;

export default PostsPage;
