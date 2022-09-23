import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import D3Sessions from './D3Sessions';
import { fetchUserAverageSessions } from '../../api/api';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: #ff0000;
  border-radius: 10px;
`;

/**
 * Component to fetch data and id for Average Session's chart
 * @component
 */

function GraphSession() {
  let { id } = useParams;
  if (id === undefined) id = 12;
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  async function fetchData(id) {
    const data = await fetchUserAverageSessions(id);
    setSessions(data);
  }
  if (sessions.length === 0) return <></>;

  return (
    <Container>
      <D3Sessions averageSessions={sessions} />
    </Container>
  );
}

export default GraphSession;
