import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import Admin from './admin';
import Home from './pages/home'
import Signin from './pages/signin';
import NotFound from './pages/errors/notfound'
import Modals from './pages/ui/modals';
import Buttons from './pages/ui/buttons';


class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Signin} />
          <Route path='/admin' render={() =>
            <Admin>
              <Switch>
                <Route path='/admin/home' component={Home} />
                <Route path='/admin/ui/modals' component={Modals}/>
                <Route path='/admin/ui/buttons' component={Buttons} />
                <Route component={NotFound} />
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    )
  }
}

export default IRouter;
