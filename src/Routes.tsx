// tslint:disable:jsx-no-lambda
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Layout from './components/templates/Layout'
import Login from './containers/pages/Login'
import WorkDetails from './containers/pages/WorkDetails'
import Works from './containers/pages/Works'

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <Redirect to="/works" />} />
      <Route path="/login" component={Login} />
      <Switch>
        <Layout>
          <Route exact={true} path="/works" component={Works} />
          <Route path="/works/:workId" component={WorkDetails} />
        </Layout>
      </Switch>
      <Route path="*" render={() => <Redirect to="/works" />} />
    </Switch>
  )
}

export default Routes
