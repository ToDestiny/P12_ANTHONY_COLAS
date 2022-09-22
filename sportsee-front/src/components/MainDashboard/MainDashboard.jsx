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
import { useParams } from 'react-router-dom';

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
  const [userInfo, setUserInfo] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAveragseSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  let error = false;
  let { id } = useParams;
  if (id === undefined) id = 12;

  useEffect(() => {
    fetchData(id);
    setDataLoading(false);
  }, [id]);

  async function fetchData(id) {
    const userInfo = await fetchDataUser(id);
    setUserInfo(userInfo);
    const userActivity = await fetchUserActivity(id);
    setUserActivity(userActivity);
    const userAverageSessions = await fetchUserAverageSessions(id);
    setUserAveragseSessions(userAverageSessions);
    const userPerformance = await fetchUserPerformance(id);
    setUserPerformance(userPerformance);
  }
  if (userInfo?.id === undefined) error = true;
  else error = false;

  if (isDataLoading) return <div>Loading ...</div>;
  else
    return error ? (
      <Error />
    ) : (
      <MainDashboardContainer>
        <TitleDashboard userName={userInfo.userInfos?.firstName} />
        <GraphsContainer
          userInfo={userInfo}
          userActivity={userActivity}
          userAverageSessions={userAverageSessions}
          userPerformance={userPerformance}
        />
      </MainDashboardContainer>
    );
}

export default MainDashboard;
