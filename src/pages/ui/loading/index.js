import React, { Component } from 'react';
import { Card, Spin, Alert, Switch } from 'antd';


class Loadings extends Component {
  state ={
    loading: false
  }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render() {
    return (
      <div>
        <Card title="Basic Spin">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Card>
        <Card title="Alert Spin">
          <Spin spinning={this.state.loading} delay={500}>
            <Alert
              message="Alert message title"
              description="Furture details about the context"
              type="info"
            />
            <div style={{ marginTop: 16}}>
              Loading State : <Switch checked={this.state.loading} onChange={this.toggle} />
            </div>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loadings;
