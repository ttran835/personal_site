import React, { Component } from 'react';
import NavBar from './grabber/NavBar';
import Headline from './grabber/Headline';
import 'bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Headline />
      </div>
    );
  }
}
