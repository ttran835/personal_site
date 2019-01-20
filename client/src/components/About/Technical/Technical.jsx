import React, { Component } from 'react';
import styles from '../../../../../css/components/Technical.css';

//technical Skills
import FrontEnd from './Technical_skills/FrontEnd';
import BackEnd from './Technical_skills/BackEnd';
import Others from './Technical_skills/Others';

export default class Technical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontEnd: false,
      backEnd: false,
      others: false,
    };

    this.toggleFrontEnd = this.toggleFrontEnd.bind(this);
    this.toggleBacktEnd = this.toggleBacktEnd.bind(this);
    this.toggleOthers = this.toggleOthers.bind(this);
  }

  toggleFrontEnd() {
    this.setState({
      frontEnd: !this.state.frontEnd,
    });
  }

  toggleBacktEnd() {
    this.setState({
      backEnd: !this.state.backEnd,
    });
  }

  toggleOthers() {
    this.setState({
      others: !this.state.others,
    });
  }

  render() {
    return (
      <div className={`row  ${styles.bg}`}>
        <div className={`col col-lg-6 ${styles.frontEndBg} `}>
          <div className={styles.skillsOverlay} onClick={this.toggleFrontEnd}>
            <FrontEnd
              toggle={this.toggleFrontEnd}
              modal={this.state.frontEnd}
            />
          </div>
        </div>

        <div className={`col col-md-4`}>
          <div className="row">
            <div className={`col`}>
              <div className={`back-end`}>
                <BackEnd />
              </div>

              <div className={`other`}>
                <Others />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*

  <div className=" col-md-6 offset-md-3 card-block">
    <h3 className="card-title">My Skills</h3>
    <h4 className="card-subtitle mb-2 text-muted">Front End</h4>
    <p className="card-text">
      ReactJS/Redux | jQuery | CSS | SCSS | AngularJS | Zurb Foundation |
      Bootstrap 4
    </p>

    <h4 className="card-subtitle mb-2 text-muted">Back End</h4>
    <p className="card-text">
      PostgreSQL | MySQL | SQL | MongoDB | ExpressJS | NodeJS
    </p>

    <h4 className="card-subtitle mb-2 text-muted">Deployment and Others</h4>
    <p className="card-text">
      Docker | AWS | EC2 | New Relics | LoaderIO | GitHub
    </p>
  </div>
*/
