import styled from 'styled-components';
import Devices from '../../utils/constants/devices';

export const Main = styled.main`
  padding-bottom: 2rem;

  @media screen and (min-width: ${Devices.TABLET_WIDTH}px) {
    padding-bottom: 3rem;
  }
`;

export const Footer = styled.footer`
  padding-bottom: 1rem;
  font-size: 0.6em;
  text-align: center;
  color: var(--dark-gray);

  @media screen and (min-width: ${Devices.TABLET_WIDTH}px) {
    padding-bottom: 1.2rem;
    font-size: 0.8em;
  }
`;
