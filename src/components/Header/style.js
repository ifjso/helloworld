import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
  background-color: #005085;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
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
  color: white;
  text-decoration: none;
`;
