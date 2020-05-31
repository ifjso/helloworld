import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import FadingButton from '../FadingButton';

const GithubButton = () => (
  <FadingButton type="button">
    <GoMarkGithub size="100%" />
  </FadingButton>
);

export default GithubButton;
