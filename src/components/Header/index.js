import PropTypes from 'prop-types';
import React from 'react';
import DarkModeButton from '../DarkModeButton';
import { StyledHeader, StyledLink, TitleWrapper, Wrapper } from './style';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <TitleWrapper>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </TitleWrapper>
      <DarkModeButton />
    </Wrapper>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
