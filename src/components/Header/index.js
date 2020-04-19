import React from 'react';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  Nav,
  LogoContainer,
  Logo,
  IconsContainer,
  Link,
} from './styles';

import logo from '~/assets/pokemon-logo.jpg';

const Header = () => (
  <Container>
    <Nav>
      <LogoContainer>
        <Logo src={logo} alt="pokedex" />
      </LogoContainer>

      <IconsContainer>
        <Link href="#">
          <FaGithubSquare size={24} color="#d5d5d5" />
        </Link>

        <Link href="#">
          <FaLinkedin size={24} color="#d5d5d5" />
        </Link>
      </IconsContainer>
    </Nav>
  </Container>
);

export default Header;
