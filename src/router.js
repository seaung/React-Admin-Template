import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import Admin from './admin';
import Home from './pages/home'
import Signin from './pages/signin';
import Signup from './pages/signup';
import Modals from './pages/ui/modals';
import Buttons from './pages/ui/buttons';
import Notices from './pages/ui/notices';
import Loadings from './pages/ui/loading';
import NotFound from './pages/errors/notfound';
import ServeInterval from './pages/errors/serveinterval';



class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/admin' render={() =>
            <Admin>
              <Switch>
                <Route path='/admin/home' component={Home} />
                <Route path='/admin/ui/modals' component={Modals}/>
                <Route path='/admin/ui/buttons' component={Buttons} />
                <Route path='/admin/ui/notices' component={Notices} />
                <Route path='/admin/ui/loadings' component={Loadings} />
                <Route component={NotFound} />
                <Route path='/admin/ui/serveinterval' component={ServeInterval} />
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    )
  }
}

export default IRouter;
