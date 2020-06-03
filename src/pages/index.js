import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from '../components/image';
import Head from '../components/Head';
import AboutMe from '../components/AboutMe';

const IndexPage = ({ data }) => (
  <>
    <Head title={data.site.siteMetadata.title} />
    <AboutMe />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
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

export default IndexPage;
