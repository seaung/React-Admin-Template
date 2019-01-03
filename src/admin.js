import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './components/header';
import Footer from './components/footer';
import Siderbar from './components/siderbar';


import './style/common.less';
import './style/layout.less';

export default class Admin extends Component {
	render() {
		return (
			<Row className='container'>
			  <Col span='4' className='navbar-left'>
					<Siderbar />
				</Col>
				<Col span='24' className='main'>
					<Header />
					<Row className='content'>
						{/*<Home />*/}
						{this.props.children}
					</Row>
					<Footer />
				</Col>
			</Row>
		)
	}

}
