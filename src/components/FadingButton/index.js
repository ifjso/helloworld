import React from 'react';
import { FadingStyledButton } from './style';

const FadingButton = ({
  width = '2rem',
  height = '2rem',
  color = 'white',
  children,
  ...rest
}) => (
  <FadingStyledButton width={width} height={height} color={color} {...rest}>
    {children}
  </FadingStyledButton>
);

export default FadingButton;
