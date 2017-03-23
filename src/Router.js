/**
 * CreateDate 2017/02/23
 * Author 张矗
 * Description
 */

'use strict';

import React from 'react';
import { Router,Route,Redirect,browserHistory } from 'dva/router';
import Layout from './component/Layout';
import Admin from './component/Admin';
import Dashboard from './view/Dashboard';
import Login from './view/Login';
import Logout from './view/Logout';
import NotFound from './view/NotFound';
import Profile from './view/Profile';

export default function ({base,title,dataSource,currentPath,children}) {
  return (
    <Router history={browserHistory}>
      <Route base={base} component={Layout}>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="profile" component={Profile}/>
        <Route component={Admin} title={title} dataSource={dataSource} currentPath={currentPath}>
          {children}
        </Route>
      </Route>
      <Route path="login" component={Login}/>
      <Route path="logout" component={Logout}/>
      <Route path="404" component={NotFound}/>
      <Redirect from="*" to="404"/>
    </Router>
  )
};
