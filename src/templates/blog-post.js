import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Head
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
