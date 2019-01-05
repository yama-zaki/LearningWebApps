import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentWillUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return <span>hoge</span>
  }
}

console.log(renderToString(<MyComponent />));
