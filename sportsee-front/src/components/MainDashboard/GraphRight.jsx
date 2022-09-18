import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

// Import Graph Icons
import CaloriesIcon from '../../assets/icons/calories.svg';
import ProteinesIcon from '../../assets/icons/proteines.svg';
import GlucidesIcon from '../../assets/icons/glucides.svg';
import LipidesIcon from '../../assets/icons/lipides.svg';

const Container = styled.div`
  height: 34em;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  margin: 0 12em 14em 2em;
`;

const GraphCalories = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const GraphProteines = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const GraphGlucides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const GraphLipides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const Icon = styled.img`
  height: 3em;
  width: 3em;
  margin: 10px;
  margin-left: 40px;
`;

const GraphDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const GraphP = styled.p`
  margin: 0;
  font-size: 20px;
`;

const GraphP2 = styled.p`
  margin: 0;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 400;
`;

function GraphRight() {
  return (
    <Container>
      <GraphCalories>
        <Icon src={CaloriesIcon} alt="Calories Icon" />
        <GraphDiv>
          <GraphP>1,930KCal</GraphP>
          <GraphP2>Calories</GraphP2>
        </GraphDiv>
      </GraphCalories>
      <GraphProteines>
        <Icon src={ProteinesIcon} alt="Proteines Icon" />
        <GraphDiv>
          <GraphP>155g</GraphP>
          <GraphP2>Proteines</GraphP2>
        </GraphDiv>
      </GraphProteines>
      <GraphGlucides>
        <Icon src={GlucidesIcon} alt="Glucides Icon" />
        <GraphDiv>
          <GraphP>290g</GraphP>
          <GraphP2>Glucides</GraphP2>
        </GraphDiv>
      </GraphGlucides>
      <GraphLipides>
        <Icon src={LipidesIcon} alt="Lipides Icon" />
        <GraphDiv>
          <GraphP>50g</GraphP>
          <GraphP2>Lipides</GraphP2>
        </GraphDiv>
      </GraphLipides>
    </Container>
  );
}

export default GraphRight;
