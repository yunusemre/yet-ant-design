import React from 'react';
import { StackedColumn } from '@ant-design/charts';
import { Card } from 'antd';

const BarChartOther = ({ width, margin }) => {
  const data = [
    {
      year: '2006',
      type: 'pears',
      value: 10,
    },
    {
      year: '2006',
      type: 'oranges',
      value: 15,
    },
    {
      year: '2006',
      type: 'pears',
      value: 9,
    },
    {
      year: '2006',
      type: 'oranges',
      value: 6,
    },
    {
      year: '2007',
      type: 'oranges',
      value: 12,
    },
    {
      year: '2007',
      type: 'pears',
      value: 18,
    },
    {
      year: '2007',
      type: 'oranges',
      value: 9,
    },
    {
      year: '2007',
      type: 'pears',
      value: 4,
    },
    {
      year: '2008',
      type: 'pears',
      value: 5,
    },
    {
      year: '2008',
      type: 'pears',
      value: 20,
    },
    {
      year: '2008',
      type: 'oranges',
      value: 8,
    },
    {
      year: '2008',
      type: 'pears',
      value: 2,
    },
    {
      year: '2009',
      type: 'pears',
      value: 1,
    },
    {
      year: '2009',
      type: 'pears',
      value: 15,
    },
    {
      year: '2009',
      type: 'oranges',
      value: 5,
    },
    {
      year: '2009',
      type: 'pears',
      value: 4,
    },
    {
      year: '2010',
      type: 'pears',
      value: 2,
    },
    {
      year: '2010',
      type: 'pears',
      value: 10,
    },
    {
      year: '2010',
      type: 'oranges',
      value: 4,
    },
    {
      year: '2010',
      type: 'pears',
      value: 2,
    },
    {
      year: '2011',
      type: 'pears',
      value: 3,
    },
    {
      year: '2011',
      type: 'oranges',
      value: 12,
    },
    {
      year: '2011',
      type: 'oranges',
      value: 6,
    },
    {
      year: '2011',
      type: 'pears',
      value: 3,
    },
    {
      year: '2012',
      type: 'oranges',
      value: 4,
    },
    {
      year: '2012',
      type: 'oranges',
      value: 15,
    },
  ];
  const config = {
    meta: {
      key: { alias: 'Value' },
      value: { alias: 'Key' },
    },
    forceFit: true,
    data,
    stackField: 'type',
    color: ['#e1e1e1', '#b3b3b3'],
    padding: 'auto',
    xField: 'year',
    yField: 'value',
  };
  return (
    <Card style={{ width, margin }} title="Yet">
      <StackedColumn {...config} />
    </Card>
  );
};

export default BarChartOther;
