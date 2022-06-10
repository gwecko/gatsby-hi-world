module.exports = {
  siteMetadata: {
    title: `Gatsby site v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      }
    }, 
    "gatsby-plugin-mdx",
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "pages",
    //     "path": "./src/pages/"
    //   },
    //   __key: "pages"
    // }
  ]
};