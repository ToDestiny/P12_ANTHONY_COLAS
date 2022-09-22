import React from 'react';
import styled from 'styled-components';
import D3Hexa from '../D3Graphs/D3Hexa';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: #282d30;
  border-radius: 10px;
`;

function GraphHexa(userPerformance) {
  return (
    <Container>
      <D3Hexa userPerformance={userPerformance} />
    </Container>
  );
}

export default GraphHexa;
