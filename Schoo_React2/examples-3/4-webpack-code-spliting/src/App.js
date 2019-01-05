import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function App({ children }) {
  return (
    <div>
      <h1>Hello, World</h1>
      <h2>Menu</h2>
      <ul>
        <li><Link to="page-a">Page A</Link></li>
        <li><Link to="page-b">Page B</Link></li>
        <li><Link to="page-c">Page C</Link></li>
      </ul>
      <div>{children}</div>
    </div>
  );
}
App.propTypes = {
  children: PropTypes.node,
};
