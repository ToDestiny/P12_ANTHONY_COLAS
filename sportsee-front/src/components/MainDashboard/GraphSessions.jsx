import React from 'react';
import styled from 'styled-components';
import D3Sessions from '../Charts/D3Sessions';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: #ff0000;
  border-radius: 10px;
`;

function GraphSession() {
  return (
    <Container>
      <D3Sessions />
    </Container>
  );
}

export default GraphSession;
