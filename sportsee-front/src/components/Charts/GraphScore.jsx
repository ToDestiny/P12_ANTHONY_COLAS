import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import D3Score from './D3Score';
import { fetchUserInfo } from '../../api/api';
import { useParams } from 'react-router-dom';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: ${colors.background};
  border-radius: 10px;
`;

/**
 * Component to fetch data and id for the score's chart
 * @component
 */

function GraphScore() {
  let { id } = useParams;
  if (id === undefined) id = 12;
  const [score, setScore] = useState([]);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  async function fetchData(id) {
    const data = await fetchUserInfo(id);
    setScore(data);
  }
  if (score.length === 0) return <></>;

  return (
    <Container>
      <D3Score todayScore={score.todayScore} />
    </Container>
  );
}

export default GraphScore;
