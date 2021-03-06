import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Wrapper, TagList, Tag } from './style';

const ProjectTimeline = ({ elements }) => (
  <Wrapper>
    <VerticalTimeline>
      {elements &&
        elements.map(element => (
          <VerticalTimelineElement
            key={element.id}
            className="content"
            date={element.date}
            iconClassName="icon"
            icon={<element.icon />}
          >
            {element.tags && (
              <TagList>
                {element.tags.map(tag => (
                  <Tag key={tag.id}>{tag.name}</Tag>
                ))}
              </TagList>
            )}

            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.company}
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              {element.position}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: element.details }} />
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  </Wrapper>
);

export default ProjectTimeline;
