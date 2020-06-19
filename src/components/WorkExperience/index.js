import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Timeline from '../Timeline';
import Logos from '../../assets/logos';
import { Container } from './style';

const WorkExperience = () => {
  const {
    allMarkdownRemark: { edges: listOfWorkExperience }
  } = useStaticQuery(graphql`
    query GetWorkExperience {
      allMarkdownRemark(
        filter: { fields: { type: { eq: "work-experience" } } }
        sort: { fields: frontmatter___started_at, order: DESC }
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
              startedAt: started_at
              endedAt: ended_at
              baseTech: base_tech
              techStack: tech_stack
            }
          }
        }
      }
    }
  `);

  const mapWorkExperienceToTimelineElement = ({ node }) => {
    const {
      name,
      company,
      position,
      task,
      startedAt,
      endedAt,
      baseTech,
      techStack
    } = node.frontmatter;

    return {
      id: node.id,
      icon: Logos[baseTech],
      date: `${startedAt} ~ ${endedAt}`,
      tags: techStack.split(',').map((tech, i) => ({ id: i, name: tech })),
      title: name,
      subtitle: `${company} - ${position} / ${task}`,
      details: node.html
    };
  };

  const elements = listOfWorkExperience.map(mapWorkExperienceToTimelineElement);

  return (
    <Container>
      <Timeline elements={elements} />
    </Container>
  );
};

export default WorkExperience;
