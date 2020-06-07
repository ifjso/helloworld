import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Wrapper } from './style';
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
        {aboutMe.frontmatter.tech_stack.split(',').map(tech => (
          <Logo title={tech} logo={LOGOS[tech]} key={tech} />
        ))}

        {/* <h3>{aboutMe.frontmatter.tech_stack}</h3> */}
      </Wrapper>
    </Container>
  );
};

// ---
// path: about-me
// date: 2020-06-01T15:33:49.700Z
// name: 오재석
// intro: 클린코드를 지향하는 백엔드 개발자, 경력 약 5년 6개월
// tech-stack: Java,JavaScript,SpringBoot,Node.js,Express,React,GraphQL,JUnit,MySQL,MongoDB,Redis,Git,Jenkins
// ---
// - 자산관리 앱 대출 추천 서비스 서버를 맡아 대출 상품 추천 및 신청 기능 개발
// - 자산관리 앱 카드 추천 서비스 혜택 계산 알고리즘 정확도 및 속도 개선

export default AboutMe;
