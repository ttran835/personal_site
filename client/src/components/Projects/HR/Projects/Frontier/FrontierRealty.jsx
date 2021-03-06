import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../HrProjects.module.scss';
import icons from '../../../../About/Technical/styles/Technical.module.scss';

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
                  Freelance Web Development contract for Frontier Realty
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
            <div className={`container card-body"`}>
              <h6 className="card-title">Project Overview</h6>
              <p className={`card-body  ${styles.p}`}>
                An informative site designed and developed for Frontier Realty
                to help with brand awareness and providing a way for clients to
                learn more about the office.
              </p>
            </div>
            <div className={`container card-body" ${styles.p}`}>
              <h6 className="card-title">Demo Site</h6>
              <p className={`card-body  ${styles.p}`}>
                This project is still in progress. The demo site currently shows
                a static front-end for testing purposes.
              </p>
              <p className={`card-body  ${styles.p}`}>
                Please refer to this{' '}
                <a href="https://datusername1.github.io/" target="_blank">
                  link
                </a>{' '}
                for a full look.
              </p>
            </div>
            <div className={`container-fluid ${styles.modalCardTechStack}`}>
              <h6 className="card-title">Developed using:</h6>
              <div className="row">
                <table
                  className={`table table-bordered ${styles.tableNoMargin}`}
                >
                  <tbody>
                    <tr>
                      <td>
                        <div className={icons.js} />
                        <p className={icons.p}>JavaScript</p>
                      </td>
                      <td>
                        <img
                          className="img-fluid"
                          src="https://s3.amazonaws.com/personal-site-tim/skills/jekyll.png"
                        />
                        <p className={icons.p}>Jekyll</p>
                      </td>
                      <td>
                        <div className={icons.html5} />
                        <p className={icons.p}>HTML5</p>
                      </td>
                      <td>
                        <div className={icons.css} />
                        <p className={icons.p}>CSS</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
