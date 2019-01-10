import React, { Component } from 'react';

//modules
import NavBar from './Navigation/NavBar';
import Headline from './Navigation/Headline';
import AboutMe from '../components/About/AboutMe';
import Articles from '../components/About/Articles';

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
              styles.paralax
            } ${styles.background1}`}
          >
            <img src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Headline />
          </div>

          <div className={`${styles.aboutMeContainer}`}>
            <div className={`${styles.aboutMe} container-fluid px-0`}>
              <AboutMe />
            </div>
            {/* <div className="articles">
              <h2 className={styles.headings2}> ARTICLES </h2>
              <Articles />
            </div> */}
            <div />

            <footer>
              <div>All Footer information</div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
