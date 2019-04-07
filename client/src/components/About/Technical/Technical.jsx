import React, { Component } from 'react';
import styles from '../../../../../css/components/Technical.css';

//technical Skills
import FrontEnd from './Technical_skills/FrontEnd';
import BackEnd from './Technical_skills/BackEnd';
import Others from './Technical_skills/Others';

//table
import FrontEndTable from './Technical_skills/Tables/FrontEndTable';
import BackEndTable from './Technical_skills/Tables/BackEndTable';
import OthersTable from './Technical_skills/Tables/OthersTable';

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
    console.log('hello frontend');
    this.setState({
      frontEnd: !this.state.frontEnd,
    });
  }

  toggleBackEnd() {
    console.log('hello backend');
    this.setState({
      backEnd: !this.state.backEnd,
    });
  }

  toggleOthers() {
    console.log('hello others');
    this.setState({
      others: !this.state.others,
    });
  }

  render() {
    const settings = {
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: true,
    };

    return (
      <div className="container-fluid">
        <div className={`row justify-content-center `}>
          <div className={`row justify-content-center ${styles.bg}`}>
            <div className={`col col-lg-10 ${styles.margin}`}>
              <div className={styles.frontEndBg}>
                <div className={styles.skillsOverlay}>
                  <FrontEndTable />
                  {/* <FrontEnd
                    toggle={this.toggleFrontEnd}
                    modal={this.state.frontEnd}
                  />*/}
                </div>
              </div>
            </div>
            <div className={`col col-sm-5 ${styles.margin}`}>
              <div className={`${styles.backEndBg}`}>
                <div className={styles.skillsOverlay}>
                  <BackEndTable />
                  {/* <BackEnd
                    toggle={this.toggleBackEnd}
                    modal={this.state.backEnd}
                  /> */}
                </div>
              </div>
            </div>
            <div className="col col-sm-5">
              <div className={`${styles.othersBg}`}>
                <div className={styles.skillsOverlay}>
                  <OthersTable />
                  {/* <Others
                    toggle={this.toggleOthers}
                    modal={this.state.others}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*

  <Slider className={styles.skillsOverlay} {...settings}>
              <div>
                <img
                  className="img-fluid"
                  src="https://s3.amazonaws.com/personal-site-tim/projects/front_end_dev.jpeg"
                  onClick={this.toggleFrontEnd}
                />
                <div className={styles.text}>
                  <h5>Front-End Skills</h5>
                </div>

                <FrontEnd
                  toggle={this.toggleFrontEnd}
                  modal={this.state.frontEnd}
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="https://s3.amazonaws.com/personal-site-tim/projects/back_end_photo.jpeg"
                  onClick={this.toggleBackEnd}
                />
                <div className={styles.text}>
                  <h5>Back-End Skills</h5>
                </div>

                <BackEnd
                  toggle={this.toggleBackEnd}
                  modal={this.state.backEnd}
                />
              </div>

              <div>
                <img
                  className="img-fluid"
                  src="https://s3.amazonaws.com/personal-site-tim/projects/deployment.jpeg"
                  onClick={this.toggleOthers}
                />
                <div className={styles.text}>
                  <h5>Deloyment/Others</h5>
                </div>

                <Others toggle={this.toggleOthers} modal={this.state.others} />
              </div>
            </Slider>
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
