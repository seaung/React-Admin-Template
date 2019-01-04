import React, { Component } from 'react';
import { Card, Button, message } from 'antd';

import '../ui.less';

export default class Messages extends Component {
  showMessage = (type) => {
    message[type]("success!");
  }
  render() {
    return (
      <div>
        <Card title="Basic Message" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>Errors</Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
        </Card>
      </div>
    )
  }
}
