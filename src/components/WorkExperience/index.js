import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Timeline from '../Timeline';
import { Container } from './style';

const WorkExperience = () => {
  const {
    allMarkdownRemark: { edges: listOfWorkExperience }
  } = useStaticQuery(graphql`
    query GetWorkExperience {
      allMarkdownRemark(
        filter: { fields: { type: { eq: "work-experience" } } }
        sort: { fields: frontmatter___start_date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              name
              company
              position
              task
              startDate: start_date
              endDate: end_date
              techStack: tech_stack
            }
          }
        }
      }
    }
  `);

  const elements = listOfWorkExperience.map(({ node }) => {
    const {
      name,
      company,
      position,
      task,
      startDate,
      endDate,
      techStack
    } = node.frontmatter;
    return {
      id: node.id,
      date: `${startDate} ~ ${endDate}`,
      tags: techStack.split(',').map((tech, i) => ({ id: i, name: tech })),
      title: name,
      subtitle: `${company} - ${position} / ${task}`,
      details: node.html
    };
  });

  return (
    <Container>
      <Timeline elements={elements} />
    </Container>
  );
};

export default WorkExperience;
