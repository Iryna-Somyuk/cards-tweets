import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  // justify-content: center;
  width: 380px;
height: 460px;
padding: 20px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

`;
export const ContactInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export const DeleteBtn = styled.button`
  padding: 4px;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;

  border: none;
  border-radius: 4px;
  background-color: rgb(210, 156, 241);
  color: black;
  font-size: 16px;
  &:hover,
  &:focus,
  &:active {
    background-color: rgb(210, 110, 241);
  }
`;
