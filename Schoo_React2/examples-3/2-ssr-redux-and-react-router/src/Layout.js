import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Layout
 *
 * 外側のレイアウト
 */
export default function Layout({ children }) {
  return (
    <div>
      <h1>react + redux + react-router: SSR</h1>
      <div>
        <ul>
          <li><Link to="page-a">Page A</Link></li>
          <li><Link to="page-b">Page B</Link></li>
          <li><Link to="page-c">Page C</Link></li>
        </ul>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
