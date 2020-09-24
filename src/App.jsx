import React from 'react';
import {
  Input, Switch, Radio, Checkbox, Button, Slider,
} from 'antd';
import SelectBox from './components/Select';
import Charts from './Charts';

const marks = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
  70: '70',
  80: '80',
  90: '90',
  100: '100',
};

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="component">
          <SelectBox defaultValue="lucy" />
        </div>
        <div className="component">
          <Input placeholder="Textbox 1" />
        </div>
        <div className="component">
          <Switch />
        </div>
        <div className="component">
          <Radio.Group>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </div>
        <div className="component">
          <Checkbox.Group>
            <Checkbox value="A">A</Checkbox>
            <Checkbox value="B">B</Checkbox>
            <Checkbox value="C">C</Checkbox>
          </Checkbox.Group>
        </div>
        <div className="component">
          <Button type="primary">Calculate</Button>
        </div>
        <div className="component">
          <Button>Calculate</Button>
        </div>
        <div className="component">
          <Slider dots range width={400} step={2} marks={marks} defaultValue={[26, 37]} />
        </div>
        <br />
        <div className="component">
          <Slider dots step={2} marks={marks} min={0} max={100} width={400} defaultValue={20} />
        </div>
      </div>
      <div className="content">
        <Charts />
      </div>
    </div>
  );
}

export default App;
