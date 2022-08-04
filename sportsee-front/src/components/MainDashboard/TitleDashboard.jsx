import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const TitleContainer = styled.div`
  height: 5em;
  width: 100%;
  font-weight: 500;
  margin: 1rem 0 1rem 4rem;
  display: flex;
  flex-direction: column;
`;

const TitleH1 = styled.h1`
  height: 3em;
  width: 100%;
  font-size: 20pt;
  color: ${colors.black};
  strong {
    color: ${colors.primary};
  }
`;

const TitleP = styled.p`
  height: 3em;
  width: 100%;
  font-size: 10pt;
  color: ${colors.black};
`;

function TitleDashboard() {
  return (
    <nav>
      <TitleContainer>
        <TitleH1>
          Bonjour <strong>Thomas</strong>
        </TitleH1>
        <TitleP>Félicitation ! Vous avez explosé vos objectifs hier 👏</TitleP>
      </TitleContainer>
    </nav>
  );
}

export default TitleDashboard;
