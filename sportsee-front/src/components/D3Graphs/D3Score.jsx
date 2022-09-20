import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function D3Score() {
  const [data] = useState([
    { property: 'a', value: 12 },
    { property: 'b', value: 78 },
  ]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up svg container
    const w = 190;
    const h = 190;
    const radius = w / 2;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')')
      .style('overflow', 'visible');

    //setting up chart
    const formattedData = d3.pie().value((d) => d.value)(data);
    const arcGenerator = d3
      .arc()
      .innerRadius(80)
      .outerRadius(radius)
      .cornerRadius(45);
    const color = d3.scaleOrdinal().range(['#FF0000', '#F7F7F7']);

    //setting up svg data
    svg
      .selectAll()
      .data(formattedData)
      .join('path')
      .attr('d', arcGenerator)
      .style('stroke-opacity', '0.0')
      .attr('fill', (d) => color(d.value));

    svg
      .append('text')
      .style('font-size', '18px')
      .text('Score')
      .attr('transform', 'translate(-120, -90)');

    //setting up annotation
  }, [data]);

  return (
    <Container>
      <svg ref={svgRef}></svg>
    </Container>
  );
}

export default D3Score;
