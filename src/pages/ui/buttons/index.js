import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import './index.less';


class Buttons extends Component {
  render() {
    return (
      <div>
        <Card title="Basic Button" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disable</Button>
        </Card>
        <Card title="Icon Button" className="card-wrap">
          <Button type="primary" icon="area-chart">Primary</Button>
          <Button icon="search">Default</Button>
          <Button type="dashed" icon="align-left">Dashed</Button>
          <Button type="danger" icon="android">Danger</Button>
          <Button disabled icon="windows">Disable</Button>
        </Card>
        <Card title="Loading Button">
          <Button type="primary" icon="circle" loading>Loading</Button>
        </Card>
        <Card title="Button Group">
          <Button.Group>
            <Button type="primary" icon="left">Forward</Button>
            <Button type="primary" icon="right">Next</Button>
          </Button.Group>
        </Card>
        <Card title="Button Size" className="card-wrap">
          <Radio.Group>
            <Radio.Button size="large">Large</Radio.Button>
            <Radio.Button size="small">Small</Radio.Button>
          </Radio.Group>
          <Button.Group>
            <Button type="primary" icon="ie" size="large">IE</Button>
            <Button type="primary" icon="chrome">Chrome</Button>
          </Button.Group>
        </Card>
      </div>
    )
  }
}

export default Buttons;
