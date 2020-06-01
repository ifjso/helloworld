import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DarkModeButton from '../DarkModeButton';
import GithubButton from '../GithubButton';
import {
  StyledHeader,
  StyledLink,
  TitleWrapper,
  ButtonWrapper,
  Container
} from './style';

const Header = ({ siteTitle }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <StyledHeader>
      <Container>
        <TitleWrapper>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </TitleWrapper>
        {isClient ? (
          <ButtonWrapper>
            <GithubButton size="1.8rem" />
            <DarkModeButton size="2.2rem" />
          </ButtonWrapper>
        ) : null}
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
