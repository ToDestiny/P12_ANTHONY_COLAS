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
  width: 30%;
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
  justify-content: center;
`;

const GraphProteines = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GraphGlucides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GraphLipides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  height: 3em;
  width: 3em;
  margin: 10px;
`;

function GraphRight() {
  return (
    <Container>
      <GraphCalories>
        <Icon src={CaloriesIcon} alt="Calories Icon" />
      </GraphCalories>
      <GraphProteines>
        <Icon src={ProteinesIcon} alt="Proteines Icon" />
      </GraphProteines>
      <GraphGlucides>
        <Icon src={GlucidesIcon} alt="Glucides Icon" />
      </GraphGlucides>
      <GraphLipides>
        <Icon src={LipidesIcon} alt="Lipides Icon" />
      </GraphLipides>
    </Container>
  );
}

export default GraphRight;
