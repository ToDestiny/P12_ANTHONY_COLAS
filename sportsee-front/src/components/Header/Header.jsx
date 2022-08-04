import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import Logo from '../../assets/logo/logo.svg';

const NavContainer = styled.header`
  height: 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.black};
`;

const LogoImg = styled.img`
  height: 3em;
  width: 8em;
  margin-left: 1em;
`;

const NavBar = styled.nav`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 8pt;
  font-weight: 500;
  margin-right: 1em;
  h2 {
    color: ${colors.white};
    margin: 20px;
  }
`;

function Header() {
  return (
    <nav>
      <NavContainer>
        <LogoImg src={Logo} alt="SportSee logo" />
        <NavBar>
          <h2>Accueil</h2>
          <h2>Profil</h2>
          <h2>Réglage</h2>
          <h2>Communauté</h2>
        </NavBar>
      </NavContainer>
    </nav>
  );
}

export default Header;
