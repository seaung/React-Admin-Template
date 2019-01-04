import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';

import '../ui.less';

export default class Notices extends Component {
  handleNotices = (type) => {
    notification[type]({
      message: "this is a message.",
      description: "this is a description."
    })
  }

  render() {
    return (
      <div>
        <Card title="Basic Notices" className="card-wrap">
          <Button type="primary" onClick={() => this.handleNotices('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleNotices('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleNotices('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.handleNotices('error')}>Error</Button>
        </Card>
      </div>
    )
  }
}
