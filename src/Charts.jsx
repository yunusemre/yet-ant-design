import React from "react";
import { BarChart, BarChartOther } from "./components/charts";

const Charts = () => (
  <div className="charts">
    <BarChart width="50%" margin="10px" />
    <BarChartOther width="50%" margin="10px" />
  </div>
);

export default Charts;
