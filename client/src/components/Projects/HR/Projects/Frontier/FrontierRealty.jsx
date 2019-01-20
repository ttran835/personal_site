import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../../css/components/HrProjects.css';
import FrontierDescription from './FrontierDescription';
import ReactDOM from 'react-dom';
// import ReactMarkdown from 'react-markdown';

//ReactJS | PostgreSQL | Nodejs | Foundation6 | CSS | Docker | AWS | HTML5

export default class FrontierRealty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      details: false,
    };

    this.toggleDetails = this.toggleDetails.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleDetails(e) {
    let id = e.target.id;
    this.setState({
      details: !this.state.details,
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div
        className={` container-fluid px-0 ${styles.frontierImgBg} ${
          styles.isActive
        }`}
        onMouseEnter={this.toggleDetails}
        onMouseLeave={this.toggleDetails}
        onClick={this.toggle}
      >
        <div className={`container-fluid px-0 ${styles.projectOverlayBg} `}>
          <div className="row">
            <div className="col col-lg-8">
              <img
                src="https://s3.amazonaws.com/personal-site-tim/projects/frontier.png"
                className={`img-fluid ${styles.shoedidasImg}`}
                id="Shoedidas"
                alt="shoedidas project"
              />
            </div>
          </div>

          <div className="container-fluid px-0 text-center">
            <h1 className={styles.headingBg}>Frontier Realty</h1>

            <div
              className={`card ${styles.cardMarginAndBg} ${styles.showDetails}`}
            >
              <div className="container-fluid">
                <p className={`card-text`}>
                  This is a personal project used to mock up a realestate
                  website for Frontier Realty.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={`${this.props.className}`}
        >
          <ModalHeader toggle={this.toggle}>Frontier Realty</ModalHeader>
          <ModalBody>
            <div className={`container card-body `}>
              <h6 className="card-title">Project Overview</h6>
              <p className="card-body">
                This is my individual project that was created as a
                demonstration for a real estate website for realtor that
                operates in Orange County. Scaling has not been tested at this
                time for the website since it is in it's demo stage.
              </p>
            </div>
            <div className="container card-body">
              <h6 className="card-title">Demo Site</h6>
              <p className="card-body">
                This project is still in progress. The demo site currently shows
                a static front-end. API has been removed for development
                purposes.
              </p>
              <p className="card-body">
                Please refer to this{' '}
                <a href="http://34.217.149.124/" target="_blank">
                  link
                </a>{' '}
                for a full look.
              </p>
            </div>
            <div
              className={` card-body container ${styles.modalCardTechStack}`}
            >
              <h6 className="card-title">Developed using:</h6>
              <div className="row">
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/skills/react_svg.svg"
                    alt="react"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/skills/fi-foundation.svg"
                    alt="zurb"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/skills/html5_svg.svg"
                    alt="html"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/skills/css_svg.svg"
                    alt="css"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/skills/nodejs_svg.svg"
                    alt="nodejs"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/skills/postgresql_svg.svg"
                    alt="postgres"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="	https://s3.amazonaws.com/personal-site-tim/skills/aws_svg.svg"
                    alt="aws"
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
