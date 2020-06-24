import styled from 'styled-components';
import { Media } from '../../theme/global';
import Devices from '../../utils/constants/devices';

export const Container = styled.section`
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: ${Media.BASE};
  width: 100%;
  min-height: 800px;
  box-sizing: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: keep-all;

  h1 {
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2.8em;
    font-weight: var(--normal);
  }

  h2 {
    margin: 0;
    padding-bottom: 2rem;
    font-size: 1.8em;
    font-weight: var(--normal);
    line-height: 1.2;
  }

  p {
    margin: 0;
    padding-bottom: 2rem;
    font-size: 1.3em;
    line-height: 1.8;
    list-style-type: none;
  }

  @media screen and (max-width: ${Devices.MOBILE_WIDTH_L}px) {
    h1 {
      font-size: 2.3em;
      padding-bottom: 0.8rem;
    }

    h2 {
      font-size: 1.5em;
      line-height: 1.4;
      padding-bottom: 1.6rem;
    }

    p {
      font-size: 1.1em;
      line-height: 1.6;
      padding-bottom: 1.6rem;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-gap: 0.4rem;

  & > * {
    margin-right: 0.6rem;
    margin-bottom: 0.8rem;
  }
`;
