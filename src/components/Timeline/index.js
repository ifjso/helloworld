import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Wrapper, TagList, Tag } from './style';

const Timeline = ({ elements }) => (
  <Wrapper>
    <VerticalTimeline>
      {elements &&
        elements.map(element => (
          <VerticalTimelineElement
            key={element.id}
            className="content"
            date={element.date}
            iconClassName="tech-icon"
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
              {element.subtitle}
            </h4>
            <div dangerouslySetInnerHTML={element.details} />
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  </Wrapper>
);

export default Timeline;
