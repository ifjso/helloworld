import styled from 'styled-components';
import Devices from '../../utils/constants/devices';

export const Wrapper = styled.div`
  .vertical-timeline {
    width: inherit;
    ::before {
      background-color: var(--dark-gray);

      @media screen and (max-width: calc(${Devices.DESKTOP_WIDTH}px - 1px)) {
        left: 22px;
      }
    }
  }

  .vertical-timeline-element-icon {
    @media screen and (max-width: calc(${Devices.DESKTOP_WIDTH}px - 1px)) {
      left: 4px;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-smoke);
    box-shadow: 0 0 0 4px var(--dark-gray);

    svg {
      width: 70%;
      height: 70%;
      left: 0;
      top: 0;
      margin: 0;
    }
  }

  .content {
    --background-color: ${({ backgroundColor }) =>
      backgroundColor || 'var(--timeline-element-background-color)'};

    .vertical-timeline-element-title {
      font-size: 1.5em;
      margin-bottom: 8px;
    }

    .vertical-timeline-element-subtitle {
      margin: 0 0 0.25rem;
      font-weight: var(--semi-bold);
    }

    .vertical-timeline-element-content {
      background-color: var(--background-color);
      color: inherit;
      box-shadow: none;

      @media screen and (max-width: calc(${Devices.DESKTOP_WIDTH}px - 1px)) {
        margin-left: 64px;
      }
    }

    .vertical-timeline-element-content-arrow {
      border-right: 7px solid var(--background-color);
    }

    p {
      line-height: 1.4;
      font-weight: var(--light);
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
