import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.h1`
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
