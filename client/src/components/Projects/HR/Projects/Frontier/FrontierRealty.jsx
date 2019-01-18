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
    };

    this.toggleIcons = this.toggleIcons.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleIcons(e) {
    let id = e.target.id;
    this.setState({
      icon: !this.state.icon,
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
        className={` container-fluid ${styles.frontierImgBg}`}
        onMouseEnter={this.toggleIcons}
        onMouseLeave={this.toggleIcons}
      >
        <div className="row">
          <div className="col col-lg-8">
            <img
              src="https://s3.amazonaws.com/personal-site-tim/projects/frontier.png"
              className={`img-fluid`}
              id="Shoedidas"
              alt="shoedidas project"
            />
          </div>
          <div className="col col-md-4 ">
            <div
              className={
                this.state.icon === true
                  ? `row ${styles.showIcons}`
                  : `row ${styles.hideIcons}`
              }
            >
              <div className="col col-md-4">
                <a
                  href="https://github.com/ttran835/sample_jack"
                  target="_blank"
                  className={`btn btn-secondary ${styles.githubBg}`}
                  role="button"
                />
              </div>
              <div className="col col-md-4">
                <a
                  className={`btn btn-secondary ${styles.viewMore}`}
                  onClick={this.toggle}
                  role="button"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${styles.cardMarginAndBg}`}>
          <div className="card-block px-1">
            <h4 className="card-title">Shoedidas</h4>
            <p className="card-text">
              A collaborative project to mock Adidas' product page at Hack
              Reactor.
            </p>
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
                    src="https://s3.amazonaws.com/personal-site-tim/react_svg.svg"
                    alt="react"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/fi-foundation.svg"
                    alt="zurb"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/html5_svg.svg"
                    alt="html"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/css_svg.svg"
                    alt="css"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/nodejs_svg.svg"
                    alt="nodejs"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="https://s3.amazonaws.com/personal-site-tim/postgresql_svg.svg"
                    alt="postgres"
                  />
                </div>
                <div className="col">
                  <img
                    className={`${styles.techStackIcons}`}
                    src="	https://s3.amazonaws.com/personal-site-tim/aws_svg.svg"
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
