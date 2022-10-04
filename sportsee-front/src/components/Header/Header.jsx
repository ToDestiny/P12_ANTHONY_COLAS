import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import Logo from '../../assets/logo/logo.svg';

const HeaderContainer = styled.header`
  height: 4em;
  width: 100vw;
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
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 8pt;
  font-weight: 500;
  h2 {
    color: ${colors.white};
    margin: 20px;
  }
`;

/**
 * Header bar container for the dashboard
 * @component
 */

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="SportSee logo" />
      <NavBar>
        <h2>Accueil</h2>
        <h2>Profil</h2>
        <h2>Réglage</h2>
        <h2>Communauté</h2>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
