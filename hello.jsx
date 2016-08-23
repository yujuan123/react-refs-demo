import React, {Component} from 'react';

class Hello extends Component {
  render() {
    return <div>
      <h1>Hello Freewind</h1>
      <div>
        <button ref="button1" onClick={() => alert('1')}>Click 1</button>
        <button ref="button2" onClick={() => alert('2')}>Click 2</button>
      </div>
      <div>
        <button onClick={this._clickBoth.bind(this)}>Click both</button>
      </div>
    </div>;
  }

  _clickBoth() {
    this.refs.button1.click();
    this.refs.button2.click();
  }
}

export default Hello;