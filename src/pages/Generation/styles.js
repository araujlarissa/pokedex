import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px 16px;
  width: 100%;
  max-width: 320px;
`;

export const CardList = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavLink = styled.button`
  text-decoration: none;
  color: #333;
  font-size: 1.6rem;
  margin: 0 auto;
`;
