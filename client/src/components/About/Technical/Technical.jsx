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
    this.toggleBackEnd = this.toggleBackEnd.bind(this);
    this.toggleOthers = this.toggleOthers.bind(this);
  }

  toggleFrontEnd() {
    this.setState({
      frontEnd: !this.state.frontEnd,
    });
  }

  toggleBackEnd() {
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
      <div className="container-fluid">
        <div className={`row justify-content-center ${styles.bg}`}>
          <div className={`col col-sm-4 ${styles.margin}`}>
            <div className={styles.frontEndBg} onClick={this.toggleFrontEnd}>
              <div className={styles.skillsOverlay}>
                <FrontEnd
                  toggle={this.toggleFrontEnd}
                  modal={this.state.frontEnd}
                />
              </div>
            </div>
          </div>
          <div className={`col col-sm-4 ${styles.margin}`}>
            <div className={`${styles.backEndBg}`} onClick={this.toggleBackEnd}>
              <div className={styles.skillsOverlay}>
                <BackEnd
                  toggle={this.toggleBackEnd}
                  modal={this.state.backEnd}
                />
              </div>
            </div>
            {/* <div className={styles.fake}>1</div> */}
          </div>
          <div className="col col-lg-8">
            <div className={`${styles.othersBg}`} onClick={this.toggleOthers}>
              <div className={styles.skillsOverlay}>
                <Others toggle={this.toggleOthers} modal={this.state.others} />
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
