import React from 'react';
import styled from 'styled-components';
import GraphActivity from '../Charts/GraphActivity';
import GraphHexa from '../Charts/GraphHexa';
import GraphRight from '../Charts/GraphRight';
import GraphScore from '../Charts/GraphScore';
import GraphSession from '../Charts/GraphSessions';

const Container = styled.div`
  height: 100%;
  width: 100%;
  font-weight: 500;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const LeftBottom = styled.div`
  height: 40%;
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/**
 * Containers for all the mainboard charts
 * @component
 */

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
