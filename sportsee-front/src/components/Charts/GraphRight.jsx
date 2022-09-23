import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { fetchUserInfo } from '../../api/api';
import { useParams } from 'react-router-dom';

// Import Graph Icons
import CaloriesIcon from '../../assets/icons/calories.svg';
import ProteinesIcon from '../../assets/icons/proteines.svg';
import GlucidesIcon from '../../assets/icons/glucides.svg';
import LipidesIcon from '../../assets/icons/lipides.svg';

const Container = styled.div`
  height: 95.3%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  margin: 0 4em 0em 2em;
`;

const GraphCalories = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
`;

const GraphProteines = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
`;

const GraphGlucides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
`;

const GraphLipides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  border-radius: 10px;
`;

const Icon = styled.img`
  height: 4em;
  width: 4em;
  margin: 10px;
  margin-left: 50px;
  margin-right: 30px;
`;

const GraphDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const GraphP = styled.p`
  margin: 0;
  font-size: 25px;
`;

const GraphP2 = styled.p`
  margin: 0;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 400;
`;

function GraphRight() {
  let { id } = useParams;
  if (id === undefined) id = 12;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  async function fetchData(id) {
    const data = await fetchUserInfo(id);
    setInfo(data);
  }
  if (info.length === 0) return <></>;

  return (
    <Container>
      <GraphCalories>
        <Icon src={CaloriesIcon} alt="Calories Icon" />
        <GraphDiv>
          <GraphP>{info.keyData.calorieCount}KCal</GraphP>
          <GraphP2>Calories</GraphP2>
        </GraphDiv>
      </GraphCalories>
      <GraphProteines>
        <Icon src={ProteinesIcon} alt="Proteines Icon" />
        <GraphDiv>
          <GraphP>{info.keyData.proteinCount}g</GraphP>
          <GraphP2>Proteines</GraphP2>
        </GraphDiv>
      </GraphProteines>
      <GraphGlucides>
        <Icon src={GlucidesIcon} alt="Glucides Icon" />
        <GraphDiv>
          <GraphP>{info.keyData.carbohydrateCount}g</GraphP>
          <GraphP2>Glucides</GraphP2>
        </GraphDiv>
      </GraphGlucides>
      <GraphLipides>
        <Icon src={LipidesIcon} alt="Lipides Icon" />
        <GraphDiv>
          <GraphP>{info.keyData.lipidCount}g</GraphP>
          <GraphP2>Lipides</GraphP2>
        </GraphDiv>
      </GraphLipides>
    </Container>
  );
}

export default GraphRight;
