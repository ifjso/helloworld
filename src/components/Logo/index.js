import React from 'react';
import { Container, LogoWrapper, LogoTitle } from './style';

const Logo = ({ title, logo, width, height }) => (
  <Container width={width}>
    <LogoWrapper height={height}>
      {logo && React.createElement(logo)}
    </LogoWrapper>
    <LogoTitle>{title}</LogoTitle>
  </Container>
);

export default Logo;
