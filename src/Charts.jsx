import React from 'react';
import { BarChart, BarChartOther } from './components/charts';

const Charts = () => (
  <div className="charts">
    <BarChart width="30%" margin="10px" />
    <BarChartOther width="30%" margin="10px" />
  </div>
);

export default Charts;
