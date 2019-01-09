import React, { Component } from 'react';

//modules
import NavBar from './Navigation/NavBar';
import Headline from './Navigation/Headline';
import AboutMe from '../components/About/AboutMe';

//styles
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
        <div className={`${styles.title} `}>
          <div
            className={`container-fluid px-0 ${styles.section} ${
              styles.background1
            } ${styles.paralax}`}
          >
            <Headline />
          </div>
          <div className={`${styles.information}`}>
            <div className={`${styles.aboutMe} container-fluid px-0`}>
              <AboutMe />
            </div>

            <footer>
              <div>All Footer information</div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
