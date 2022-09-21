import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import GraphsContainer from './GraphContainer';
import TitleDashboard from './TitleDashboard';
import Error from '../../pages/Error';
import {
  fetchDataUser,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from '../../api/api';

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
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAveragseSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);

  let error = false;

  useEffect(() => {
    fetchData();
    fetchUserActivity();
    fetchUserAverageSessions();
    fetchUserPerformance();
  }, []);

  async function fetchData() {
    const user = await fetchDataUser();
    setData(user);
    const userActivity = await fetchUserActivity();
    setUserActivity(userActivity);
    const userAverageSessions = await fetchUserAverageSessions();
    setUserAveragseSessions(userAverageSessions);
    const userPerformance = await fetchUserPerformance();
    setUserPerformance(userPerformance);
  }

  console.log(data);

  if (
    data?.id ||
    userActivity?.id ||
    userAverageSessions?.id ||
    userPerformance?.id === undefined
  )
    error = true;

  return error ? (
    <Error />
  ) : (
    <MainDashboardContainer>
      <TitleDashboard userName={data.userInfos?.firstName} />
      <GraphsContainer data={data} />
    </MainDashboardContainer>
  );
}

export default MainDashboard;
