import React, { Component } from 'react';
import 'bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Hello from React</h1>
      </div>
    );
  }
}
