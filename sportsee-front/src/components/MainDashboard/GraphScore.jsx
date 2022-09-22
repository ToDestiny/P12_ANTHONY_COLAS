import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import D3Score from '../Charts/D3Score';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: ${colors.background};
  border-radius: 10px;
`;

function GraphScore({ todayScore }) {
  return (
    <Container>
      <D3Score todayScore={todayScore} />
    </Container>
  );
}

export default GraphScore;
