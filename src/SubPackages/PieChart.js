import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, title }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 300; // Adjust width as needed
    const height = 300; // Adjust height as needed
    const radius = Math.min(width, height) / 2;
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const pieData = pie(data);

    svg.selectAll('*').remove(); // Clear existing chart elements

    const chartGroup = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const arcs = chartGroup
      .selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors(i));

    // Add labels
    chartGroup
      .selectAll('text')
      .data(pieData)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data.label);

    chartGroup
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.35em')
      .text(title);
  }, [data, title]);

  return (
    <div>
      <svg ref={svgRef} width={300} height={300} />
    </div>
  );
};

export default PieChart;
