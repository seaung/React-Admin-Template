import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './components/header';
import Footer from './components/footer';
import Siderbar from './components/siderbar';

import './style/common.css';

export default class App extends Component {
	render() {
		return (
			<Row className=''>
			  <Col span='4' className='navbar'>
					<Siderbar />
				</Col>
				<Col span='24' className='main'>
					<Header />
					<Footer />
				</Col>
			</Row>
		)
	}

}
