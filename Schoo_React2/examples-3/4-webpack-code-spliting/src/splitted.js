import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';

render(
  // require.ensureでファイル分割
  // ページが表示されるタイミングで読み込んでくる
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="page-a" getComponent={(_, callback) => {
        require.ensure([], require => {
          callback(null, require('./PageA').default);
        }, 'PageA');
      }} />
      <Route path="page-b" getComponent={(_, callback) => {
        require.ensure([], require => {
          callback(null, require('./PageB').default);
        }, 'PageB');
      }} />
      <Route path="page-c" getComponent={(_, callback) => {
        require.ensure([], require => {
          callback(null, require('./PageC').default);
        }, 'PageC');
      }} />
    </Route>
  </Router>,
  document.getElementById('root')
);
