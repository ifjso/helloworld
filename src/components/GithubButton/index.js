import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GoMarkGithub } from 'react-icons/go';
import FadingButton from '../FadingButton';

const GithubButton = ({ size }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
        }
      }
    }
  `);

  return (
    <FadingButton type="button" width={size} height={size} aria-label="github">
      <a href={data.site.siteMetadata.github}>
        <GoMarkGithub size="100%" />
      </a>
    </FadingButton>
  );
};

export default GithubButton;
