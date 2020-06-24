import styled from 'styled-components';
import Devices from '../../utils/constants/devices';

export const Container = styled.section`
  padding: 0 1rem;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.8em;

  @media screen and (max-width: ${Devices.MOBILE_WIDTH_L}px) {
    margin-bottom: 2.4rem;
    font-size: 2.3em;
  }
`;
