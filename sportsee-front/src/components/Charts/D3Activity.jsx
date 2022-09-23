import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const TooltipContainer = styled.div`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: #ff0000;
  color: #ffffff;
`;

function D3Activity(data) {
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <p> {`${payload[0].value}kg`}</p>
          <p> {`${payload[1].value}kCal`}</p>
        </TooltipContainer>
      );
    }
    return null;
  }

  return (
    <Container>
      <ResponsiveContainer
        width="100%"
        height="100%"
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <BarChart width="50%" height="50%" data={data.activity}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis
            dataKey="kilogram"
            type="number"
            tickLine={false}
            orientation="right"
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <YAxis
            dataKey="calories"
            type="number"
            orientation="left"
            yAxisId="calories"
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
            yAxisId="calories"
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default D3Activity;
