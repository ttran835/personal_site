import React, { Component } from 'react';
import styles from './HrProjects.module.scss';
import Shoedidas from './Projects/Shoedidas/Shoedidas';
import FrontierRealty from './Projects/Frontier/FrontierRealty';
import Sdc from './Projects/SDC/Sdc';

export default class HrProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`container-fluid ${styles.projectFont}`}>
        <div className={`row justify-content-around`}>
          <div className={`col col-lg-5`}>
            <Shoedidas />
          </div>

          <div className={`col col-lg-5`}>
            <FrontierRealty />
          </div>
        </div>

        {/* <Sdc /> */}
      </div>
    );
  }
}
