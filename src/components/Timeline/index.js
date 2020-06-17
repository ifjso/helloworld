import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import COLOR from '../../utils/constants/color';
import { Container } from './style';

const Timeline = () => (
  <Container>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: COLOR.JET,
          color: COLOR.WHITE,
          boxShadow: 'none'
        }}
        contentArrowStyle={{ borderRight: `7px solid ${COLOR.JET}` }}
        date="2020.04 - 현재"
        iconClassName="icon"
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: COLOR.JET,
          color: COLOR.WHITE,
          boxShadow: 'none'
        }}
        contentArrowStyle={{ borderRight: `7px solid ${COLOR.JET}` }}
        date="2010 - 2011"
        iconClassName="icon"
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Container>
);

export default Timeline;
