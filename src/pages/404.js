import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';

const NotFoundPage = ({ data }) => (
  <>
    <Head title={`404 Not Found | ${data.site.siteMetadata.title}`} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default NotFoundPage;
