import React, { Component } from 'react';
import Axios from 'axios';
//modules
import NavBar from './Navigation/NavBar';
import Header from './Header/Header';
import Headline from './Navigation/Headline';
import AboutMe from '../components/About/AboutMe';
import Technical from './About/Technical';
import Articles from './About/Articles/Articles';

//projects
import HrProjects from '../components/Projects/HR/HrProjects';
import Shoedidas from './Projects/HR/Projects/Shoedidas';
import FrontierRealty from './Projects/HR/Projects/FrontierRealty';

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
            <div className={`container-fluid ${styles.parallaxHider}`}>
              <div className={`container-fluid px-0 ${styles.aboutMe}`}>
                <AboutMe />
              </div>
              <Technical />
            </div>
            <div className={`container-fluid `}>
              <h3 className={styles.projects}>MY PROJECTS</h3>
              <HrProjects toHelpRender={this.toHelpRender} />
            </div>
            <footer>
              <div className="contaier-fluid text-center">
                <Footer />
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
