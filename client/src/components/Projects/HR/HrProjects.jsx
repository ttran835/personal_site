import React, { Component } from 'react';
import styles from '../../../../../css/components/HrProjects.css';
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
      <div className={`container-fluid px-0 ${styles.projectFont}`}>
        <div className="row">
          <div className="col">
            <Shoedidas />
          </div>
          <div className="col">
            <FrontierRealty />
          </div>
          {/* <Sdc /> */}
        </div>
      </div>
    );
  }
}
