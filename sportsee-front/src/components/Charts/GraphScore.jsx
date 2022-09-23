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

function GraphScore({ todayScore }) {
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
      <D3Score todayScore={info.todayScore} />
    </Container>
  );
}

export default GraphScore;
