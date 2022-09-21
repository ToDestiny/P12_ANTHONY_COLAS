import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import GraphsContainer from './GraphContainer';
import TitleDashboard from './TitleDashboard';
import { fetchDataUser } from '../../api/api';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const user = await fetchDataUser();
    setData(user);
  }

  console.log(data.id);

  return (
    <MainDashboardContainer>
      <TitleDashboard />
      <GraphsContainer />
    </MainDashboardContainer>
  );
}

export default MainDashboard;
