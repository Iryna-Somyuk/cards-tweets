import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Сontainer = styled.div`
  margin: 0 auto;
  padding: 20px 10px;

  // width: 500px;
  // border: none;
  // border-radius: 4px;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0.5, 0, 0.24);
  // background-image: linear-gradient(to bottom, #7bc6cc, #be93c5);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px; 
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;