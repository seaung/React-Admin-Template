import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less';


class Modals extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
  }

  handleOPen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleCancel = () => {
    this.setState({
      showModal1: false
    })
  }

  render() {
    return (
      <div>
        <Card title="Basic Modals" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOPen("showModal1")}>open modal</Button>
          <Button type="primary" onClick={() => this.handleOPen("showModal2")}>open modal</Button>
          <Button type="primary" onClick={() => this.handleOPen("showModal3")}>open modal</Button>
        </Card>
        <Modal
          title="React Modal"
          visible={this.state.showModal1}
          onCancel={this.handleCancel}
          >
            <p>this is a modal.</p>
          </Modal>
        <Modal
          title="React Modal"
          visible={this.state.showModal2}
          okText="Ok"
          cancelText="close"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}>
            <p>this is a modal.</p>
          </Modal>
          <Modal
            title="React Modal"
            visible={this.state.showModal3}
            onCancel={() => {
              this.setState({
                showModal3: false
              })
            }}>
              <p>this is a modal.</p>
            </Modal>
      </div>
    )
  }
}

export default Modals;
