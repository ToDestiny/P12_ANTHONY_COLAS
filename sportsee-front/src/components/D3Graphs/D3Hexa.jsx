import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

function D3Hexa({ userPerformance }) {
  const data = [
    { property: 'Intensité', value: 2.5 },
    { property: 'Vitesse', value: 4.8 },
    { property: 'Force', value: 3.9 },
    { property: 'Endurance', value: 4.5 },
    { property: 'Energie', value: 4.4 },
    { property: 'Cardio', value: 3.4 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="property"
          stroke="#FFFFFF"
          fontSize={14}
          tickLine={false}
        />
        <Radar
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default D3Hexa;
