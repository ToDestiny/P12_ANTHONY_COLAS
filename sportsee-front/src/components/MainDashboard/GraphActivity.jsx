import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  height: 40em;
  width: 100%;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
  margin: 10px;
`;

const Right = styled.div`
  display: flex;
  margin-top: 23px;
  flex-direction: row;
`;

const Dot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #282d30;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

const Dot2 = styled.span`
  height: 7px;
  width: 7px;
  background-color: #e60001;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

function GraphActivity() {
  return (
    <Container>
      <H1>Activité quotidienne</H1>
      <Right>
        <P1>
          <Dot />
          Poids(kg)
        </P1>
        <P2>
          <Dot2 />
          Calories brûlées (kCal)
        </P2>
      </Right>
    </Container>
  );
}

export default GraphActivity;
