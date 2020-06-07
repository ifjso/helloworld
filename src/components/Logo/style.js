import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => width || '80px'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogoWrapper = styled.div`
  background-color: white;
  width: inherit;
  height: ${({ height }) => height || '80px'};
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 25%;
  padding: 12%;
  margin-bottom: 5px;
  display: flex;
  flex: 100%;
  justify-content: center;
  align-items: center;

  svg {
    width: 90%;
    height: 90%;
  }
`;

export const LogoTitle = styled.span`
  font-family: Open Sans;
  font-size: 0.9em;
  line-height: 1;
`;
