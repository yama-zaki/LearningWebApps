import React, { PropTypes } from 'react';

export default function MyComponent({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}
MyComponent.propTypes = {
  name: PropTypes.string,
};
MyComponent.defaultProps = {
  name: 'Server Side Rendering',
};
