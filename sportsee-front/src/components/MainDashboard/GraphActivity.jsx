import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  height: 50%;
  width: 100%;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
`;

const H1 = styled.h1`
  color: ${colors.black};
  font-size: 12px;
  margin: 2rem 0 0 2rem;
`;

const P1 = styled.p`
  color: ${colors.black};
  font-size: 10px;
`;

const P2 = styled.p`
  color: ${colors.black};
  font-size: 10px;
`;

function GraphActivity() {
  return (
    <Container>
      <H1>Activité quotidienne</H1>
      <P1>Poids(kg)</P1>
      <P2>Calories brûlées (kCal)</P2>
    </Container>
  );
}

export default GraphActivity;
