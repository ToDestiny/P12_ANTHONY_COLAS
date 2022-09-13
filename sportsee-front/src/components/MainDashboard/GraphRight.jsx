import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  height: 34em;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  margin: 0 12em 14em 2em;
`;

const GraphCalories = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
`;

const GraphProteines = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
`;

const GraphGlucides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
`;

const GraphLipides = styled.div`
  height: 22%;
  width: 100%;
  background-color: ${colors.background};
`;

function GraphRight() {
  return (
    <Container>
      <GraphCalories />
      <GraphProteines />
      <GraphGlucides />
      <GraphLipides />
    </Container>
  );
}

export default GraphRight;
