import styled from 'styled-components'
import { theme } from 'theme'

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${theme.colors.manga};
`;

export const StyledContent = styled.section`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 0;
  svg {
    width: 120px;
  }
  p {
    text-align: center;
    font-weight: 200;
  }
`;
