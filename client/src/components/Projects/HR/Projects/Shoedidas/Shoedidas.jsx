import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../../css/components/HrProjects.css';
import icons from '../../../../../../../css/components/Technical.css';

export default class Shoedidas extends Component {
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
                alt="shoedidas project"
              />
            </div>
          </div>
          <div className={`container-fluid px-0 text-center `}>
            <h1 className={styles.headingBg}>Shoedidas</h1>
            <div
              className={`card ${styles.cardMarginAndBg} ${styles.showDetails}`}
            >
              <div className="container-fluid">
                <p className={`card-text`}>
                  A collaborative project at Hack Reactor LA.
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
              <p className={`card-body" ${styles.p}`}>
                This is a group project developed by aspiring software engineers
                at Hack Reactor from November 2018 to December 2018. The goal of
                the project is to closely mimic Adidas' product description and
                detail page.
                <br />
                All components shown in 10 seconds preview are fully modular
                microservices. They can be integrated with one another
                seamlessly.
              </p>
            </div>

            {/* <div className="container card-body">
              <h6 className="card-title">Project Contributors:</h6>
              <p className="card-body">
                <a href="https://github.com/haydenbetts" target="_blank">
                  Hayden Betts
                </a>{' '}
                <br />
                <a href="https://github.com/omar-jandali" target="_blank">
                  Omar Jandali
                </a>{' '}
                <br />
                <a href="https://github.com/mlin367" target="_blank">
                  Matthew Lin
                </a>{' '}
                <br />
                <a href="https://github.com/ttran835 " target="_blank">
                  Tim Tran
                </a>
              </p>
            </div> */}

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
                    <tr>
                      <td>
                        <div className={icons.node} />
                        <p className={icons.p}>NodeJS</p>
                      </td>
                      <td>
                        <div className={icons.mysql} />
                        <p className={icons.p}>MySQL</p>
                      </td>
                      <td>
                        <div className={icons.sql} />
                        <p className={icons.p}>SQL</p>
                      </td>
                      <td>
                        <div className={icons.docker} />
                        <p className={icons.p}>SQL</p>
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

/*
 {/* <div className={`card ${styles.cardMarginAndBg}`}>
          <img
            className={`card-img-top img-fluid ${styles.imgBg}`}
            src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg"
            alt="Card image cap"
          />
          <div className="card-block">
            <h4 className="card-title">Shoedidas</h4>
            <p className="card-text">
              A project done with colleagues at Hack Reactor. The primary goal
              of the project is for our recreate the Adidas' product page from
              scratch as of December 2018.
            </p>
            <p>For more details, please refer below:</p>
*/
