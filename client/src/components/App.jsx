import React, { Component } from 'react';
import Axios from 'axios';
//modules
import NavBar from './Navigation/NavBar/NavBar';
import Header from './Header/Header';
import Headline from './Navigation/Headline/Headline';
import AboutMe from './About/AboutMe/AboutMe';
import Details from './About/Details/Details';
// import Resume from './About/Technical/Resume';
import Technical from './About/Technical/Technical';
import Articles from './About/Articles/Articles';

//projects
import HrProjects from '../components/Projects/HR/HrProjects';

import Footer from '../components/Footer/Footer';

//styles
import styles from './App.module.scss';

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
                className={`col col-lg-7 align-self-center ${
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
                </div>{' '}
                {/* <div className="container-fluid">
                  <Resume />
                </div> */}
                <div
                  className={`container-fluid text-center ${
                    styles.containerMargin
                  }`}
                >
                  <div className="contaier-fluid justify-content-center">
                    <h2>
                      Technical Skills
                      <div
                        className={`progress-bar ${styles.barStyle}`}
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </h2>
                  </div>
                  <Technical />
                </div>
                <div
                  className={`container-fluid px-0 ${styles.containerMargin}`}
                >
                  <h2 className={`${styles.projects}`}>
                    Projects
                    <div
                      className={`progress-bar ${styles.barStyle}`}
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </h2>
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
