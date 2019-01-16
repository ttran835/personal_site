import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../css/components/HrProjects.css';

export default class Shoedidas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div class="col-md-6 offset-md-3">
        <div className={`card ${styles.cardMargin}`}>
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

            <div className={`container-fluid 0-px`}>
              <div className="row">
                <a
                  href="https://github.com/ttran835/Tim---Module"
                  target="_blank"
                  className={`btn btn-primary ${styles.buttonSpace} ${
                    styles.materialBtn
                  }`}
                >
                  View code on GitHub
                </a>

                <Button
                  color="primary"
                  className={`${styles.buttonSpace} ${styles.materialBtn}`}
                  onClick={this.toggle}
                >
                  View more details about Shoedidas
                </Button>
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
          <ModalHeader toggle={this.toggle}>Shoedidas</ModalHeader>
          <ModalBody>
            <h6>Project Overview</h6>
            <p>
              This project is blah blah blah, and blah blah blah and what not
            </p>
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
