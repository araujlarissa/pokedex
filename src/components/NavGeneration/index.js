import React from 'react';

import { Nav, NavLink } from './styles';

const NavGeneration = () => (
  <Nav>
    <NavLink to="/generation/1">First Generation</NavLink>
    <NavLink to="/generation/2">Second Generation</NavLink>
    <NavLink to="/generation/3">Thirth Generation</NavLink>
  </Nav>
);

export default NavGeneration;
