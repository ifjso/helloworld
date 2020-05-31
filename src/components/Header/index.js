import PropTypes from 'prop-types';
import React from 'react';
import DarkModeButton from '../DarkModeButton';
import GithubButton from '../GithubButton';
import {
  StyledHeader,
  StyledLink,
  TitleWrapper,
  ButtonWrapper,
  Container
} from './style';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <TitleWrapper>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </TitleWrapper>
      <ButtonWrapper>
        <GithubButton size="1.8rem" />
        <DarkModeButton size="2.2rem" />
      </ButtonWrapper>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
