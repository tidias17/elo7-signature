import styled from 'styled-components'

export const StyledContent = styled.section`
  padding: 24px 0 40px;
`;

export const StyleContainerPlans = styled.section`
  margin: 16px 0 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyleActionPlans = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 8px 0 16px;
  input:not(:first-child) {
    margin-left: 40px;
  }
`;

export const StyleContentPlans = styled.section`
  min-height: 480px;
  display: flex;
  justify-content: space-evenly;
`;
