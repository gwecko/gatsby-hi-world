import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1>This is **ran by Gatsby.</h1>
      <StaticImage
        alt="Campus sidewalk and trees after an evening rain"
        src="../images/rainy_campus.jpeg"
      />
      <p>This is the end of index file</p>
    </Layout>
  )
}

export default IndexPage
