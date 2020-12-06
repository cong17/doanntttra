import styled from 'styled-components';

export const Covid19Container = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.forecastPanelBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
`;
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.panelTitleColor};
`;
export const SectionTimeUpdate = styled.h6`
  padding-top: 10px;
  float: right;
  font-size: 1rem;
  color: ${({ theme }) => theme.panelTitleColor};
`;
export const Covid19Items = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;

  > :last-child {
    margin-right: 0;
  }
  >span{
    width: 100%;
  } 
  > div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  @media (max-width: 800px) {
    > div {
      justify-content: space-between;
    }
  }

`;
export const Covid19ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  h6 {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4581c5;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0.7rem 0;
  }
  p {
    font-weight: 600;
    font-size: 1.125rem;
    color: #4a6fa1;
  }
  span {
    font-size: 1.125rem;
    color: #4a6fa1;
    width: 5rem;
    text-align: left;
    width:100%
  }
`;
