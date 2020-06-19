import styled from 'styled-components';

export const Wrapper = styled.div`
  .tech-icon {
    background: var(--jet);

    ::after {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      background: no-repeat center/50% url('./assets/css3-logo.svg');
    }
  }

  .vertical-timeline {
    width: inherit;
  }

  .content {
    --background-color: ${({ backgroundColor }) =>
      backgroundColor || 'var(--jet)'};

    .vertical-timeline-element-content {
      background-color: var(--background-color);
      color: inherit;
      box-shadow: none;
    }

    .vertical-timeline-element-content-arrow {
      border-right: 7px solid var(--background-color);
    }
  }
`;

export const TagList = styled.ul`
  padding: 0;
  margin: 0 0 16px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const Tag = styled.li`
  box-sizing: border-box;
  padding: 5px;
  margin: 0 8px 8px 0;
  border: 2px solid var(--dark-gray);
  border-radius: 8px;
  background-color: var(--light-gray);
  font-size: 0.8em;
  color: var(--jet);
`;
