import React, { Component } from 'react';
import styles from './Projects.module.scss';
import Shoedidas from './HR/Projects/Shoedidas/Shoedidas';
import FrontierRealty from './HR/Projects/Frontier/FrontierRealty';
import RollsRoyce from './PixelMotion/Projects/Rolls_Royce/Rolls-royce';
import Sdc from './HR/Projects/SDC/Sdc';

export default class HrProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`container-fluid ${styles.projectFont}`}>
        <div className={`row justify-content-around`}>
          <div className={`col-xs-12 col-md-5`}>
            <Shoedidas />
          </div>

          <div className={`col-xs-12 col-md-5`}>
            <FrontierRealty />
          </div>

          <div className={`col-xs-12 col-md-5`}>
            <RollsRoyce />
          </div>
        </div>
      </div>
    );
  }
}
