import React, { Component } from 'react';
import styles from '../../../../../css/components/HrProjects.css';
import Shoedidas from '../HR/Projects/Shoedidas';
import FrontierRealty from '../HR/Projects/FrontierRealty';
import Sdc from '../HR/Projects/Sdc';

export default class HrProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid px-0">
        <Shoedidas />
        {/* <Sdc /> */}
        <FrontierRealty />
      </div>
    );
  }
}
