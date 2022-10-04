import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import GraphsContainer from './GraphContainer';
import TitleDashboard from './TitleDashboard';
import Error from '../../pages/Error';
import { fetchUserInfo } from '../../api/api';
import { useParams } from 'react-router-dom';

const MainDashboardContainer = styled.div`
  position: absolute;
  height: 85%;
  width: 85%;
  top: 5em;
  left: 7rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/**
 * Main Dashboard container
 * Shows Error if an API error occurs
 * @component
 */

function MainDashboard() {
  const [userInfo, setUserInfo] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  let error = false;
  let { id } = useParams();

  if (id === undefined) id = 12;

  useEffect(() => {
    setDataLoading(true);
    fetchData(id);
    setDataLoading(false);
  }, [id]);

  async function fetchData(id, isMockedData) {
    let userInfo = await fetchUserInfo(id, isMockedData);
    setUserInfo(userInfo);
  }
  if (userInfo?.id === undefined) error = true;
  else error = false;

  if (isDataLoading) return <div>Loading ...</div>;
  else
    return error ? (
      <Error />
    ) : (
      <MainDashboardContainer>
        <TitleDashboard
          userName={
            /*  isMockedData
              ? data?.USER_MAIN_DATA[0]?.userInfos?.firstName
              : */ userInfo.userInfos?.firstName
          }
        />
        <GraphsContainer />
      </MainDashboardContainer>
    );
}

export default MainDashboard;
