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

function D3Activity() {
  const data = [
    { day: '1', weight: 68, calorie: 358 },
    { day: '2', weight: 69, calorie: 300 },
    { day: '3', weight: 70, calorie: 370 },
    { day: '4', weight: 69, calorie: 290 },
    { day: '5', weight: 68, calorie: 330 },
    { day: '6', weight: 71, calorie: 360 },
    { day: '7', weight: 70, calorie: 390 },
    { day: '8', weight: 67, calorie: 250 },
    { day: '9', weight: 68, calorie: 300 },
    { day: '10', weight: 70, calorie: 390 },
  ];

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
        <BarChart width="50%" height="50%" data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <XAxis
            dataKey="calorie"
            type="number"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            dataKey="weight"
            type="number"
            tickLine={false}
            orientation="right"
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <YAxis dataKey="calorie" type="number" orientation="left" />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="weight"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calorie"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default D3Activity;
