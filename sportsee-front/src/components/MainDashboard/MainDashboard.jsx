import React from 'react';
import styled from 'styled-components';
import GraphsContainer from './GraphContainer';
import TitleDashboard from './TitleDashboard';

const MainDashboardContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 4em;
  left: 5rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

function MainDashboard() {
  return (
    <MainDashboardContainer>
      <TitleDashboard />
      <GraphsContainer />
    </MainDashboardContainer>
  );
}

export default MainDashboard;
