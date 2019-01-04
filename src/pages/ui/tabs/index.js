import React, { Component } from 'react';
import { Card, Tabs, message } from 'antd';

import '../ui.less';

const TabPane = Tabs.TabPane;

export default class TabsToggle extends Component {
  callback = (key) => {
    message.info("key : " + key);
  }

  render() {
    return (
      <div>
        <Card title="Basic Tabs" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">this is a tab 1</TabPane>
            <TabPane tab="Tab 2" key="2">this is a tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">this is a tab 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Icon Tabs" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane
              tab={<span><Icon type="apple" />Tab 1</span>}
              key="1">this is a tab 1</TabPane>
            <TabPane
              tab={<span><Icon type="apple" />Tab 1</span>}
              key="2">this is a tab 2</TabPane>
            <TabPane
              tab={<span><Icon type="apple" />Tab 1</span>}
              key="3">this is a tab 3</TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}
