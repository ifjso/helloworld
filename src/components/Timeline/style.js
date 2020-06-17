import styled from 'styled-components';
import COLOR from '../../utils/constants/color';

export const Container = styled.div`
  .icon {
    background: ${COLOR.JET};
    color: ${COLOR.WHITE};
    width: 2rem;
    height: 2rem;
    top: 1rem;
    margin: 0 0.25rem;

    @media screen and (min-width: 1170px) {
      margin-left: -1rem;
    }
  }
`;
