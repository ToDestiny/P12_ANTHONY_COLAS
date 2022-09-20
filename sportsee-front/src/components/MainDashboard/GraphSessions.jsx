import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  height: 100%;
  width: 30%;
  font-weight: 500;
  background-color: ${colors.background};
  border-radius: 10px;
`;

function GraphSession() {
  return <Container></Container>;
}

export default GraphSession;
