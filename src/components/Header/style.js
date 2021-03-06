import styled from 'styled-components';
import { Link } from 'gatsby';
import { Media } from '../../theme/global';
import Devices from '../../utils/constants/devices';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--background-color);
  z-index: 10;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Media.BASE};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.h1`
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;

  @media screen and (max-width: calc(${Devices.TABLET_WIDTH}px - 1px)) {
    font-size: 0.8em;
  }
`;
