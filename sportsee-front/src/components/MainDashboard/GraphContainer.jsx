import React from 'react';
import styled from 'styled-components';
import GraphActivity from './GraphActivity';

const Container = styled.div`
  height: 40em;
  width: 100%;
  font-weight: 500;
  margin: 4rem 0rem 4rem 4rem;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

function GraphsContainer() {
  return (
    <Container>
      <Left>
        <GraphActivity />
      </Left>
      <Right></Right>
    </Container>
  );
}

export default GraphsContainer;
