import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const NetCashFlowLineChart = ({ data }) => {
  const svgRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const dataToShow = data.Month.slice(startIndex, startIndex + 5);
  const combinedData = dataToShow.map((month, index) => ({
    Month: month,
    NetCashFlow: data['Net Cash Flow'][index + startIndex],
  }));

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const chartWidth = 500;
    const chartHeight = 400; // Adjust the height as needed
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const yScaleSteps = 6; // Number of y-axis steps

    // Calculate the maximum and minimum value among Net Cash Flow for scaling the y-axis
    const maxNetCashFlow = d3.max(combinedData, (d) => d.NetCashFlow);
    const minNetCashFlow = d3.min(combinedData, (d) => d.NetCashFlow);

    const yScale = d3
      .scaleLinear()
      .domain([Math.min(minNetCashFlow, 0), Math.max(maxNetCashFlow, 0)]) // Set the y-axis domain
      .nice(yScaleSteps) // Specify the number of y-axis ticks
      .range([chartHeight - margin.bottom, margin.top]);

    const xScale = d3
      .scaleBand()
      .domain(combinedData.map((d) => d.Month))
      .range([margin.left, chartWidth - margin.right])
      .padding(0.1);

    const line = d3
      .line()
      .x((d) => xScale(d.Month) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.NetCashFlow));

    svg.selectAll('*').remove(); // Clear existing chart elements

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${chartHeight - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale).tickFormat(d3.format('.2s'))); // Format y-axis ticks

    svg
      .append('path')
      .datum(combinedData)
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', 'blue') // Blue color for the line
      .attr('stroke-width', 2)
      .attr('d', line);
  }, [data,combinedData, startIndex]);

  const chartWidth = 1000; // Match the width used in rendering
  const chartHeight = 400; // Match the height used in rendering

  const handleNext = () => {
    if (startIndex + 5 < data.Month.length) {
      setStartIndex(startIndex + 5);
    }
  };

  const handleBack = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 5);
    }
  };

  return (
    <div>
      <svg ref={svgRef} width={chartWidth} height={chartHeight} />
      <button onClick={handleBack} disabled={startIndex === 0}>
        Back
      </button>
      <button onClick={handleNext} disabled={startIndex + 5 >= data.Month.length}>
        Next
      </button>
    </div>
  );
};

export default NetCashFlowLineChart;
