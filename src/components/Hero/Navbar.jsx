import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const NewPaletteLink = styled(Link)`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  color: #ffffff6f;
  &:hover {
    color: white;
  }
`;

function Navbar() {
  return (
    <Container>
      <Logo to="/">Recolor</Logo>
      <NewPaletteLink to="/palette/new">Create new palette</NewPaletteLink>
    </Container>
  );
}

export default Navbar;
