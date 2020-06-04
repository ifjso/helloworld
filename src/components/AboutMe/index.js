import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123123'
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          width: '100%',
          margin: '0 1rem',
          padding: '2rem 0'
        }}
      >
        <div style={{ textAlign: 'center', paddingBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '2.5em',
              fontWeight: 300,
              margin: 0
            }}
          >
            About me
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: '1 1', paddingRight: '40px' }}>
            <h3
              style={{
                fontSize: '1.5em',
                fontWeight: 400,
                margin: '0',
                paddingBottom: '0.4rem'
              }}
            >
              {aboutMe.frontmatter.name}
            </h3>
            <h4
              style={{
                fontSize: '1.1em',
                fontWeight: 400,
                margin: '0',
                paddingBottom: '1.0rem'
              }}
            >
              {aboutMe.frontmatter.intro}
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: aboutMe.html }}
              style={{
                fontSize: '0.9em',
                lineHeight: 1.8,
                listStyleType: 'none'
              }}
            />
          </div>
          <div>
            <img
              src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
              style={{ width: '260px' }}
            />
          </div>
        </div>
        {/* <h4>{aboutMe.frontmatter.tech_stack}</h4> */}
      </div>
    </div>
  );
};

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

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
