import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './index.less';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span='24'>
            <span>welcome</span>
            <a href=''>logout</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span='4' className='breadcrumb-title'>Home</Col>
          <Col span='20' className='weather'>
            <span className='date'>date</span>
            <span className='weather-detail'>weather</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
