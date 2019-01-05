import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import Layout from './Layout';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <Route path="page-a" component={PageA} />
          <Route path="page-b" component={PageB} />
          <Route path="page-c" component={PageC} />
        </Route>
      </Router>
    </Provider>
  );
}
App.propTypes = {
  store: PropTypes.any,
  history: PropTypes.any,
};
