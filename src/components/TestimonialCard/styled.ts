import styled from 'styled-components'
import { theme } from 'theme'

export const StyledContent = styled.section`
  width: 30%;
  padding: 24px 0 8px;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  padding: 12px;
  border: 2px solid ${theme.colors.manga};
  border-radius: 8px;
  p:first-child {
    width: 100%;
    font-weight: 400;
    text-transform: uppercase;
    color: ${theme.colors.darker};
    text-align: center;
  }
  p:last-child {
    font-style: italic;
  }
`;
