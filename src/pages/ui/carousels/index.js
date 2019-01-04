import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './index.less';

export default class Carousels extends Component {
  render() {
    return (
      <div>
        <Card title="Basic Carousel">
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
        <Card title="Image Carousel">
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
        </Card>
      </div>
    )
  }
}
