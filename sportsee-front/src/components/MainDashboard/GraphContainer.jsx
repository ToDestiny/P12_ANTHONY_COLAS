import React from 'react';
import styled from 'styled-components';
import GraphActivity from './GraphActivity';
import GraphHexa from './GraphHexa';
import GraphRight from './GraphRight';
import GraphScore from './GraphScore';
import GraphSession from './GraphSessions';

const Container = styled.div`
  height: 38em;
  width: 100%;
  font-weight: 500;
  margin: 4rem 0rem 8rem 4rem;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const LeftBottom = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 4em;
  justify-content: space-between;
`;

function GraphsContainer() {
  return (
    <Container>
      <Left>
        <GraphActivity />
        <LeftBottom>
          <GraphSession />
          <GraphHexa />
          <GraphScore />
        </LeftBottom>
      </Left>
      <GraphRight />
    </Container>
  );
}

export default GraphsContainer;
