import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './components/header';
import Footer from './components/footer';
import Siderbar from './components/siderbar';
import Home from './pages/home';

import './style/common.less';
import './style/layout.less';

export default class App extends Component {
	render() {
		return (
			<Row className='container'>
			  <Col span='4' className='navbar'>
					<Siderbar />
				</Col>
				<Col span='24' className='main'>
					<Header />
					<Row className='content'>
						<Home />
					</Row>
					<Footer />
				</Col>
			</Row>
		)
	}

}
