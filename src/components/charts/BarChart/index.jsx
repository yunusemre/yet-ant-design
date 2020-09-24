import React from 'react';
import { Column } from '@ant-design/charts';
import { Card } from 'antd';

const BarChart = ({ width, margin }) => {
  const data = [
    {
      key: '10',
      value: 50,
    },
    {
      key: '20',
      value: 350,
    },
    {
      key: '30',
      value: 250,
    },
    {
      key: '40',
      value: 150,
    },
    {
      key: '50',
      value: 850,
    },
  ];
  const config = {
    meta: {
      key: { alias: 'Value' },
      value: { alias: 'Key' },
    },
    forceFit: true,
    data,
    color: ['#b3b3b3'],
    padding: 'auto',
    xField: 'key',
    yField: 'value',
  };
  return (
    <Card style={{ width, margin }} title="Yet">
      <Column {...config} />
    </Card>
  );
};

export default BarChart;
