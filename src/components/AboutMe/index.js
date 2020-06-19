import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Wrapper, LogoWrapper } from './style';
import Logos from '../../assets/logos';
import Logo from '../Logo';

const AboutMe = () => {
  const { markdownRemark: aboutMe } = useStaticQuery(
    graphql`
      query GetAboutMe {
        markdownRemark(fields: { type: { eq: "about-me" } }) {
          html
          frontmatter {
            name
            intro
            techStack: tech_stack
          }
        }
      }
    `
  );

  const { name, intro, techStack } = aboutMe.frontmatter;

  return (
    <Container>
      <Wrapper>
        <h1>{name}</h1>
        <h2>{intro}</h2>
        <div dangerouslySetInnerHTML={{ __html: aboutMe.html }} />

        <LogoWrapper>
          {techStack.split(',').map(tech => (
            <Logo key={tech} title={tech} logo={Logos[tech]} />
          ))}
        </LogoWrapper>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
