import React, { Component } from 'react';
import Axios from 'axios';
//modules
import NavBar from './Navigation/NavBar';
import Headline from './Navigation/Headline';
import AboutMe from '../components/About/AboutMe';
import Articles from '../components/About/Articles';
import HrProjects from '../components/Projects/HR/HrProjects';
import Footer from '../components/Footer/Footer';

//styles
import styles from '../../../css/components/App.css';
import 'bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    Axios.defaults.baseURL = '';
  }

  render() {
    const cardBgStyle = {
      backgroundColor: '#e3e2e0',
    };

    return (
      <div className="main">
        {/* <NavBar /> */}
        <div className={`${styles.title} `}>
          <div
            className={`container-fluid px-0 ${styles.section} ${
              styles.paralax
            } ${styles.background1}`}
          >
            <img src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Headline />
          </div>
          <figcaption class="figure-caption">
            Photo By{' '}
            <a href="https://www.pexels.com/@cookiecutter?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
              veeterzy
            </a>{' '}
            from Pexels
          </figcaption>

          <div className={`${styles.aboutMeContainer}`}>
            <div className={`${styles.aboutMe} container-fluid px-0`}>
              <AboutMe />
            </div>
            {/* <div className="articles">
              <h2 className={styles.headings2}> ARTICLES </h2>
              <Articles />
            </div> */}
          </div>
          <div className={`container-fluid `} style={cardBgStyle}>
            <h3 className={styles.projects}>MY PROJECTS</h3>
            <HrProjects />
          </div>

          <footer>
            <div>All Footer information</div>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
