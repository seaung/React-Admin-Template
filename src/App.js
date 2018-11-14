import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layouts from './views/layout';
import Home from './views/home';
import Singin from './views/singin';
import Singup from './views/singup';
import Profile from './views/profile';
import NotFound from './views/errors/notfound';


export default class App extends Component {
	render() {
		let LayoutRouter = (
			<Layouts>
			  <Switch>
				  <Route exact path='/' component={Home} />
					<Route path='/profile' component={Profile} />
					<Route component={NotFound} />
				</Switch>
			</Layouts>
		);

		return (
			<Router>
			  <Switch>
				  <Route path='/login' component={Singin}/>
					<Route path='/singup' component={Singup} />
					<Route path='/' render={ props => LayoutRouter } />
				</Switch>
			</Router>
		)
	}

}
