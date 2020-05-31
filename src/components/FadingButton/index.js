import React from 'react';
import { FadingStyledButton } from './style';

const FadingButton = ({
  width = '2em',
  height = '2em',
  color = 'white',
  children,
  ...rest
}) => (
  <FadingStyledButton width={width} height={height} color={color} {...rest}>
    {children}
  </FadingStyledButton>
);

export default FadingButton;
