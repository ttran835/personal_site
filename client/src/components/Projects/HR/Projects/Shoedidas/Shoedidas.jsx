import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../../css/components/HrProjects.css';
import ShoedidasDescription from './ShoedidasDescription';

export default class Shoedidas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      icon: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleIcons = this.toggleIcons.bind(this);
  }

  toggleIcons(e) {
    console.log('hello hehe');
    console.log('state', this.state.icon);
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
        className={`container-fluid ${styles.imgBg}`}
        onMouseEnter={this.toggleIcons}
        onMouseLeave={this.toggleIcons}
      >
        <div className="row">
          <div className="col col-lg-8">
            <figure className="figure">
              <img
                src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg"
                className={`figure-img img-fluid rounded`}
                id="Shoedidas"
                alt="shoedidas project"
              />
            </figure>
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
                  href="https://github.com/ttran835/Tim---Module"
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
            <h4 class="card-title">Shoedidas</h4>
            <p class="card-text">
              A collaborative Project to mock Adidas' product page at Hack
              Reactor.
            </p>
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
            <div className={`container card-body `}>
              <h6 className="card-title">Project Overview</h6>
              <p className="card-body">
                This is a group project developed by aspiring software engineers
                at Hack Reactor from November 2018 to December 2018. The goal of
                the project is to closely mimic Adidas' product description as
                they appear on December of 2018.
                <br />
                All components shown in 10 seconds preview are fully modular
                microservices. They can be integrated with one another
                seamlessly.
              </p>
            </div>
            <div className="container card-body">
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
            </div>

            <div className="container card-body">
              <h6 className="card-title">Demo Site</h6>
              <p className="card-body">
                Please refer to this{' '}
                <a href="http://54.146.229.91/" target="_blank">
                  link
                </a>{' '}
                for a full look at all components proxied together.
              </p>

              <p className="card-body">
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

            <div
              className={` card-body container ${styles.modalCardTechStack}`}
            >
              <h6 className="card-title">Developed Using:</h6>
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
                    src="https://s3.amazonaws.com/personal-site-tim/mysql.png"
                    alt="mysql"
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
