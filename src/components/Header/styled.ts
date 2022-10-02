import styled from 'styled-components'
import { theme } from 'theme'

export const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background-color: ${theme.colors.white};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 2px solid ${theme.colors.manga}
`;

export const StyledContent = styled.section`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  svg {
    width: 100px;
  }
`;
