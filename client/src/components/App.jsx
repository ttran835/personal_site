import React, { Component } from 'react';
import NavBar from './grabber/NavBar';
import Headline from './grabber/Headline';
import styles from '../../../css/components/App.css';
import 'bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <div className={`${styles.title} container-fluid`}>
          <Headline />
        </div>
      </div>
    );
  }
}
