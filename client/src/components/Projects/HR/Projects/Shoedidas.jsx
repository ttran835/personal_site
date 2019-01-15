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
            <p>See GitHub for more details.</p>

            <div className={styles.buttonInline}>
              <a
                href="https://github.com/ttran835/Tim---Module"
                target="_blank"
                className="btn btn-primary"
              >
                View GitHub
              </a>
              <Button color="primary" onClick={this.toggle}>
                View Details
              </Button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
