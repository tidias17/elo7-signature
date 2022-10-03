import styled from 'styled-components'
import { theme } from 'theme'

export const StyledContainer = styled.section`
  width: 280px;
  height: 400px;
  margin-top: 100px !important;
  padding: 20px 12px;
  border: 2px solid ${theme.colors.manga};
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  h2 {
    height: 40px;
  }
  form {
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
`;
