/**
 * Form.js
 *
 * - <form>部分のComponent
 * - submitされるとactionをdispatchする
 */
import React, { Component } from 'react';
import dispatcher from './dispatcher';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Actionをdispatcherに投げる
    dispatcher.dispatch({
      actionType: 'add',
      message: this.state.input,
    });

    this.setState({ input: '' });
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.input} />
      </form>
    );
  }
}

export default Form;
