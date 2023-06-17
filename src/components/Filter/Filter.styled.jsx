import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  // margin-bottom: 12px;
  // font-weight: 500;
  // font-size: 18px;
`;

export const FilterBtn = styled.button`
display: inline-flex;
padding: 8px 12px;
border-radius: 4px;
border: none;
font: inherit;
cursor: pointer;
background-color: #e2e5e8;
color: inherit;
  font-size: 16px;
  &:hover,
  &:focus,
  &:active {
    background-color: #1976d2;
    color: #fff;
  }
`;
