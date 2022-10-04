import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import PropTypes from 'prop-types';

const TitleContainer = styled.div`
  height: 3em;
  width: 100%;
  font-weight: 500;
  margin-left: 2em;
  display: flex;
  flex-direction: column;
`;

const TitleH1 = styled.h1`
  height: 2em;
  width: 100%;
  font-size: 14pt;
  color: ${colors.black};
  strong {
    color: ${colors.primary};
  }
`;

const TitleP = styled.p`
  height: 1em;
  width: 100%;
  font-size: 10pt;
  color: ${colors.black};
`;

/**
 * Title component for the dashboard showing the name of the user
 * @param { String } userName
 * @component
 */

function TitleDashboard({ userName }) {
  return (
    <nav>
      <TitleContainer>
        <TitleH1>
          Bonjour <strong>{userName}</strong>
        </TitleH1>
        <TitleP>Félicitation ! Vous avez explosé vos objectifs hier 👏</TitleP>
      </TitleContainer>
    </nav>
  );
}

TitleDashboard.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default TitleDashboard;
