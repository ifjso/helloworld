import styled from 'styled-components';

const FadingStyledButton = styled.button`
  margin: 0;
  padding: 0;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: transparent;
  color: ${({ color }) => color || 'inherit'};
  opacity: 0.6;
  border: none;
  outline: none;
  transition: opacity 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & > * {
    color: ${({ color }) => color || 'inherit'};
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export { FadingStyledButton };
