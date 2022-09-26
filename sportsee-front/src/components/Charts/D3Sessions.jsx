import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 10px;
`;

const Title = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
  text-align: start;
`;

const TooltipContainer = styled.p`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
  border-style: none;
`;

/**
 * Line chart that shows the user average sessions
 * @param { Object } sessions
 * @component
 */

function D3Sessions(sessions) {
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
    }
    return null;
  }
  return (
    <Container>
      <Title>
        Durée moyenne
        <br />
        des sessions
      </Title>
      <ResponsiveContainer width="100%" height="100%" className="sessions-div">
        <LineChart
          width={320}
          height={320}
          data={sessions.averageSessions}
          outerRadius="75%"
          margin={{ top: 0, right: 15, bottom: 15, left: 15 }}
          onMouseMove={(e) => {
            const div = document.getElementsByClassName('sessions-div')[0];
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth;
              const mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="white"
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis domain={[0, 'dataMax + 50']} hide={true} />
          <Line
            type="basis"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
            legendType="none"
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

D3Sessions.propTypes = {
  todayScore: PropTypes.object,
};

export default D3Sessions;
