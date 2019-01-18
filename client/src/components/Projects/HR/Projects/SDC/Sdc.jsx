import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../../css/components/HrProjects.css';

export default class Sdc extends Component {
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
            src="https://s3.amazonaws.com/personal-site-tim/bandwidth-close-up-computer-1148820.jpg"
            alt="Card image cap"
          />
          <figcaption class="figure-caption">
            Photo by{' '}
            <a href="https://www.pexels.com/@cookiecutter?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
              panumas nikhomkhai
            </a>{' '}
            from Pexels
          </figcaption>
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className={styles.buttonInline}>
              <a href="#" target="_blank" className="btn btn-primary">
                View GitHub
              </a>
              <Button color="primary" onClick={this.toggle}>
                View Details
              </Button>
            </div>
          </div>
        </div>
        <Modal
          size="lg"
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
