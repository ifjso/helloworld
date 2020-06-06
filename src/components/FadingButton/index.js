import React from 'react';
import { FadingStyledButton } from './style';

const FadingButton = ({ width, height, color, children, ...rest }) => (
  <FadingStyledButton width={width} height={height} color={color} {...rest}>
    {children}
  </FadingStyledButton>
);

export default FadingButton;
