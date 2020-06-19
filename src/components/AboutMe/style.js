import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  min-height: 900px;
  box-sizing: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2.8em;
    font-weight: 400;
  }

  h2 {
    margin: 0;
    padding-bottom: 2rem;
    font-size: 1.8em;
    font-weight: 400;
  }

  p {
    margin: 0;
    padding-bottom: 2rem;
    font-size: 1.3em;
    line-height: 1.8;
    list-style-type: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 0.6rem;
    margin-bottom: 0.8rem;
  }
`;
