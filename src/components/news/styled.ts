import styled from 'styled-components';

export const PageContainer = styled.div`
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
export const PageNewItemContainer = styled.div`
> .Title{
  width: 100%;
  font-size: 20px;
  color: ${({ theme }) => theme.panelTitleColor};

}
>.Time{
  font-size: 15px;
  padding:5px 0;
}
 > a > img{
  height:auto;
  width:100%;
  color: ${({ theme }) => theme.panelTitleColor};
  padding-bottom:15px
}

`;
export const newsItemContainer = styled.div`
  
`;
