import styled from 'styled-components'
import { theme } from 'theme'

export const StyledContent = styled.section`
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  background-color: ${theme.colors.mangaOpacity};
  border-radius: 8px;
  p:first-child {
    width: 100%;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }
  p:last-child {
    font-style: italic;
  }
`;

export const StyledIcons = styled.section`
  height: 165px;
  display: flex;
  padding: 0 60px;
  flex-wrap: wrap;
  gap: 32px;
  svg {
    width: 40px;
  }
`;

export const StyledValue = styled.section`
  width: 100%;
  p {
    font-size: 32px;
    color: ${theme.colors.lousa};
  }
`;
