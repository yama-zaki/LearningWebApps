import React, { PureComponent } from 'react';
import { render } from 'react-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: 'hoge' };
  }
  render() {
    console.log('render');
    // 浅い比較をしているのでrenderは呼ばれない
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
