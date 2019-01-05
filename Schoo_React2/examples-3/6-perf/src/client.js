import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'hoge' };
  }
  render() {
    // 全く同じ値でsetState. clickのたびにrenderは呼ばれる
    const handleClick = () => this.setState({
      value: 'hoge'
    });
    return <div>
      <p>value: {this.state.value}</p>
      <button onClick={handleClick}>クリック</button>
    </div>;
  }
}

render(<App />, document.getElementById('root'));
