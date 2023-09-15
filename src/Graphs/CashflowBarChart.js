import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const CashflowBarChart = ({ data }) => {
  const svgRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const chartWidth = 500;
    const chartHeight = 400; // Adjust the height as needed
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const yScaleSteps = 6; // Number of y-axis steps

    // Combine the data into an array of objects and limit to the first 10 data points
    const combinedData = data.Month.slice(startIndex, startIndex + 5).map((month, index) => ({
      Month: month,
      Debit: Math.max(0, data.Debit[index + startIndex]), // Ensure no negative values
      Credit: Math.max(0, data.Credit[index + startIndex]), // Ensure no negative values
    }));

    // Calculate the maximum value among Debit and Credit for scaling the y-axis
    const maxAmount = d3.max(combinedData, d => Math.max(d.Debit, d.Credit));

    const yScale = d3
      .scaleLinear()
      .domain([0, maxAmount]) // Set the y-axis domain based on maxAmount
      .nice(yScaleSteps) // Specify the number of y-axis ticks
      .range([chartHeight - margin.bottom, margin.top]);

    const xScale = d3
      .scaleBand()
      .domain(combinedData.map(d => d.Month))
      .range([margin.left, chartWidth - margin.right])
      .padding(0.3);

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
      .selectAll('.debit-bar')
      .data(combinedData)
      .enter()
      .append('rect')
      .attr('class', 'debit-bar')
      .attr('x', d => xScale(d.Month) + xScale.bandwidth() / 4) // Shift Debit bars to the right
      .attr('y', d => yScale(d.Debit))
      .attr('width', xScale.bandwidth() / 2) // Adjust the width for both bars
      .attr('height', d => chartHeight - margin.bottom - yScale(d.Debit))
      .attr('fill', 'rgba(255, 99, 132, 0.5)');

    svg
      .selectAll('.credit-bar')
      .data(combinedData)
      .enter()
      .append('rect')
      .attr('class', 'credit-bar')
      .attr('x', d => xScale(d.Month) + xScale.bandwidth() / 4) // Shift Credit bars to the right
      .attr('y', d => yScale(d.Credit))
      .attr('width', xScale.bandwidth() / 2) // Adjust the width for both bars
      .attr('height', d => chartHeight - margin.bottom - yScale(d.Credit))
      .attr('fill', 'rgba(54, 162, 235, 0.5)');
      
  }, [data, startIndex]);

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

export default CashflowBarChart;
