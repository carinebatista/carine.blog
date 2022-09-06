module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Carine.blog`,
    author: `Carine Batista`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/CarineBatata`,
      },
      {
        name: `github`,
        url: `https://github.com/carinebatista`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
