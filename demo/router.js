import React from 'react';
import {Router} from '../src/index';
import {Route,IndexRedirect} from 'dva/router';
import Hello from './Hello';

let base='demo';
let title='Demo';
let dataSource = [
  {
    title: 'Hello',
    path:'hello'
  }
];
let currentPath='hello';

export default function() {
  return (
    <Router base={base} title={title} dataSource={dataSource}  currentPath={currentPath}>
      <Route path="/">
        <IndexRedirect to="hello"/>
        <Route path="hello" component={Hello}/>
      </Route>
    </Router>
  )
};
