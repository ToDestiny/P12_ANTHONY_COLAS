import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

import YogaIcon from '../../assets/icons/icon1.svg';
import SwimmingIcon from '../../assets/icons/icon2.svg';
import BikingIcon from '../../assets/icons/icon3.svg';
import LiftingIcon from '../../assets/icons/icon4.svg';

const NavContainer = styled.header`
  height: 100vh;
  width: 5em;
  margin-top: -4em;
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
`;

const NavBar = styled.nav`
  height: 100%;
  width: 3em;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40vh;
  flex-direction: column;
`;

const Icon = styled.img`
  height: 3em;
  width: 3em;
  margin: 10px;
`;

const CopyrightText = styled.h3`
  width: 100%;
  margin-left: 20px;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  color: ${colors.white};
  font-size: 12px;
`;

function LeftBar() {
  return (
    <nav>
      <NavContainer>
        <NavBar>
          <IconContainer>
            <Icon src={YogaIcon} alt="Yoga Icon" />
            <Icon src={SwimmingIcon} alt="Swimming Icon" />
            <Icon src={BikingIcon} alt="Biking Icon" />
            <Icon src={LiftingIcon} alt="Lifting Icon" />
          </IconContainer>
          <CopyrightText>Copyright SportSee 2022</CopyrightText>
        </NavBar>
      </NavContainer>
    </nav>
  );
}

export default LeftBar;
