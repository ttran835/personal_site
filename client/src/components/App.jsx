import React, { Component } from 'react';
import Axios from 'axios';
//modules
import NavBar from './Navigation/NavBar';
import Header from './Header/Header';
import Headline from './Navigation/Headline';
import AboutMe from './About/AboutMe';
import Details from './About/Details';
import Resume from './About/Technical/Resume';
import Technical from './About/Technical/Technical';
import Articles from './About/Articles/Articles';

//projects
import HrProjects from '../components/Projects/HR/HrProjects';

import Footer from '../components/Footer/Footer';

//styles
import styles from '../../../css/components/App.css';
import 'bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toRenderModal: 'hidden',
    };

    Axios.defaults.baseURL = '';
  }

  render() {
    const cardBgStyle = {
      backgroundColor: '#faf9f5',
    };

    //to Render Projects

    return (
      <div className="main container-fluid px-0">
        {/* <NavBar /> */}
        <div className={`${styles.title} `} style={cardBgStyle}>
          <Header />
          <div className={`${styles.primaryBodyContainer}`}>
            {/* <div className="articles">
              <h2 className={styles.headings2}> ARTICLES </h2>
              <Articles />
            </div> */}
            <div className={`container-fluid px-0 ${styles.parallaxHider}`}>
              <div
                className={`col col-lg-6 align-self-center ${
                  styles.mainWrapper
                }`}
              >
                <div className={`container-fluid px-0 ${styles.aboutMe}`}>
                  <AboutMe />
                </div>
                <div
                  className={`container-fluid ${styles.containerMargin} ${
                    styles.details
                  }`}
                >
                  <Details />
                </div>

                <div className="container-fluid">
                  <Resume />
                </div>

                <div
                  className={`container-fluid text-center ${
                    styles.containerMargin
                  }`}
                >
                  <h2>Technical Skills</h2>
                  <Technical />
                </div>

                <div
                  className={`container-fluid px-0 ${styles.containerMargin}`}
                >
                  <h2 className={styles.projects}>PROJECTS</h2>
                  <HrProjects />
                </div>
              </div>
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
