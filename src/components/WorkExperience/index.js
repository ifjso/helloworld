import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectTimeline from '../ProjectTimeline';
import Logos from '../../assets/logos';
import { Container, Title } from './style';

const WorkExperience = () => {
  const {
    allMarkdownRemark: { edges: listOfWorkExperience }
  } = useStaticQuery(graphql`
    query GetWorkExperience {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "work-experience" } } }
        sort: { fields: [frontmatter___started_at], order: DESC }
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
      company: `🍀 ${company}`,
      position: `🎯 ${position} / ${task}`,
      details: node.html
    };
  };

  const elements = listOfWorkExperience.map(mapWorkExperienceToTimelineElement);

  return (
    <Container>
      <Title>Work Experience</Title>
      <ProjectTimeline elements={elements} />
    </Container>
  );
};

export default WorkExperience;
