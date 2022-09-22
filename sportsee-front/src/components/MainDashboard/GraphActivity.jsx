import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import D3Activity from '../Charts/D3Activity';

const Container = styled.div`
  height: 60%;
  width: 100%;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${colors.background};
`;

const H1 = styled.h1`
  color: ${colors.black};
  font-size: 18px;
  margin: 2rem 0 0 2rem;
`;

const P1 = styled.p`
  color: ${colors.black};
  font-size: 14px;
`;

const P2 = styled.p`
  color: ${colors.black};
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 10px 20px 10px 10px;
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

const Top = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

function GraphActivity() {
  return (
    <Container>
      <Top>
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
      </Top>
      <D3Activity />
    </Container>
  );
}

export default GraphActivity;
