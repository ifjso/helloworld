import React from 'react';
import { Textfit } from 'react-textfit';
import { Container, LogoWrapper, LogoTitle } from './style';

const Logo = ({ title, logo, width, height }) => (
  <Container width={width}>
    <LogoWrapper height={height}>
      {logo && React.createElement(logo)}
    </LogoWrapper>
    <LogoTitle>
      <Textfit mode="single">{title}</Textfit>
    </LogoTitle>
  </Container>
);

export default Logo;
