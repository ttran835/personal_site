import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './Rolls-royce.module.scss';
import icons from '../../../../About/Technical/styles/Technical.module.scss';

export default class RollsRoyce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      details: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
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
        className={`container-fluid px-0  ${styles.shoedidasImgBg} ${
          styles.isActive
        }`}
        onMouseEnter={this.toggleDetails}
        onMouseLeave={this.toggleDetails}
        onClick={this.toggle}
      >
        <div className={`container-fluid px-0 ${styles.projectOverlayBg}`}>
          <div className={`row`}>
            <div className="col col-lg-8">
              <img
                src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg"
                className={`img-fluid ${styles.shoedidasImg}`}
                id="Shoedidas"
                alt="Shoedidas project"
              />
            </div>
          </div>
          <div className={`container-fluid px-0 text-center `}>
            <h1 className={styles.headingBg}>Rolls-Royce of Orange County</h1>
            <div
              className={`card ${styles.cardMarginAndBg} ${styles.showDetails}`}
            >
              <div className="container-fluid">
                <p className={`card-text`}>
                  A production website that was built and customized for
                  Rolls-Royce of Orange County.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader onMouseEnter={this.toggleIcons} toggle={this.toggle}>
            Shoedidas
          </ModalHeader>
          <ModalBody onMouseEnter={this.toggleIcons}>
            <div className={`container card-body" ${styles.p}`}>
              <h6 className="card-title">Project Overview</h6>
              <p className={`card-body" ${styles.p}`} />
            </div>

            <div className={`container card-body"`}>
              <h6 className="card-title">Demo Site</h6>
              <p className={`card-body ${styles.p}`}>
                Please refer to this{' '}
                <a href="http://54.146.229.91/" target="_blank">
                  link
                </a>{' '}
                for a full look at all components proxied together.
              </p>

              <p className={`card-body ${styles.p}`}>
                This{' '}
                <a href="http://54.146.229.91:3002" target="_blank">
                  link
                </a>{' '}
                will lead to the components that we're developed by me.
              </p>
              <img
                className={`img-fluid ${styles.modalImg}`}
                src="https://media.giphy.com/media/jkZgVAHXtGHfRFuC65/giphy.gif"
              />
            </div>

            <div className={`container-fluid ${styles.modalCardTechStack}`}>
              <h6 className="card-title">Developed Using:</h6>
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
                        <div className={icons.react} />
                        <p className={icons.p}>ReactJS</p>
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
