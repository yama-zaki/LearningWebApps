import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="page-a" component={PageA} />
      <Route path="page-b" component={PageB} />
      <Route path="page-c" component={PageC} />
    </Route>
  </Router>,
  document.getElementById('root')
);
