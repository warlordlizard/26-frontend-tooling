'use strict';

import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({
        text: "Click Button",
      })
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState(state => {
      return { content: cowsay.say({text: `${faker.lorem.words(8)}`})}
    });
  }
  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <div className="cow">
          <pre><p>{this.state.content}</p></pre>
        </div>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));