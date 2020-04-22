import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 320px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.6rem;
  margin: 0 auto;
`;
