import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';

const IndexPage = ({ data }) => (
  <>
    <Head title={data.site.siteMetadata.title} />
    <AboutMe />
    <WorkExperience />
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
