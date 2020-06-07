import React from 'react';
import { Container, LogoWrapper } from './style';

const Logo = ({ title, logo, width, height }) => (
  <Container width={width}>
    <LogoWrapper height={height}>{React.createElement(logo)}</LogoWrapper>
    <span>{title}</span>
  </Container>
);

export default Logo;
