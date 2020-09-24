import React from 'react';
import { Select } from 'antd';
import Arrow from '../../assets/arrow.svg';
import './index.scss';

const { Option } = Select;

const SelectBox = (props) => (
  <>
    <Select {...props} suffixIcon={<img src={Arrow} alt="arrow" width="10" />}>
      <Option value="jack">Dropdown menu item 1</Option>
      <Option value="lucy">Dropdown menu item 2</Option>
    </Select>
  </>
);

export default SelectBox;
