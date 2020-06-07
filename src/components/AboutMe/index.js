import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Wrapper, LogoWrapper } from './style';
import LOGOS from '../../assets/logos';
import Logo from '../Logo';

const AboutMe = () => {
  const data = useStaticQuery(
    graphql`
      query MarkdownRemark {
        markdownRemark(fields: { slug: { eq: "/about-me/" } }) {
          html
          frontmatter {
            name
            intro
            tech_stack
          }
        }
      }
    `
  );

  const aboutMe = data.markdownRemark;

  return (
    <Container>
      <Wrapper>
        <h1>{aboutMe.frontmatter.name}</h1>
        <h2>{aboutMe.frontmatter.intro}</h2>
        <div dangerouslySetInnerHTML={{ __html: aboutMe.html }} />

        <LogoWrapper>
          {aboutMe.frontmatter.tech_stack.split(',').map(tech => (
            <Logo key={tech} title={tech} logo={LOGOS[tech]} />
          ))}
        </LogoWrapper>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
