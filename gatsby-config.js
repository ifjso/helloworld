module.exports = {
  siteMetadata: {
    title: 'JaeSeok O - Backend Developer',
    home: 'ifjso',
    description: 'Let me introduce myself.',
    footer: 'Copyright © 2020 ifjso All rights reserved.',
    author: 'ojsboy@hotmail.com',
    github: 'https://github.com/ifjso'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout')
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about me',
        path: `${__dirname}/contents/about-me`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work experience',
        path: `${__dirname}/contents/work-experience`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs']
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/ifjso-icon.png'
      }
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto\:300,400,500,600,700',
          'Open Sans\:300,400,500,600,700'
        ],
        display: 'swap'
      }
    }
  ]
};
