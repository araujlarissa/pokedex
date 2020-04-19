import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: 320px;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;
`;

export const LogoContainer = styled.div`
  width: 24px;
  height: 24px;
`;

export const Logo = styled.img`
  width: 100%;
  transform: rotateZ(30deg);
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
`;
