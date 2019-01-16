import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../css/components/HrProjects.css';
import ReactDOM from 'react-dom';
// import ReactMarkdown from 'react-markdown';

//ReactJS | PostgreSQL | Nodejs | Foundation6 | CSS | Docker | AWS | HTML5

export default class FrontierRealty extends Component {
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
            src="https://s3.amazonaws.com/personal-site-tim/Jack-Tran.png"
            alt="Card image cap"
          />

          <div className="card-block">
            <h4 className="card-title">Frontier Realty</h4>
            <p className="card-text">
              This is a personal project used to mock up a realestate website
              for Frontier Realty, a real estate agency operated locally in
              Westminster, Huntington Beach, and Fountain Valley area.
            </p>
            <p>See GitHub for more details.</p>
            <div className={`container-fluid`}>
              <div className="row">
                <a
                  href="https://github.com/ttran835/sample_jack"
                  target="_blank"
                  className={`btn btn-primary ${styles.buttonSpace}  ${
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

          <Modal
            size="lg"
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Frontier Realty</ModalHeader>
            <ModalBody>
              <h6>Project Overview</h6>
              <p>
                This is my individual project that was created as a
                demonstration for a real estate website for realtor that
                operates in Orange County. Front-end of the codebase uses
                Javscript, ReactJS, CSS, Zurb Foundation. The back-end of the
                project consisted of Express, NodeJS, and PostgreSQL. Scaling
                has not been tested at this time for the website since it is in
                it's demo stage. Site works with multiple viewports at this
                time, however, primary image needs to change once mobile
                viewport comes into play.
              </p>
              <div className={`container`}>
                <div className="row">
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
                      src="https://s3.amazonaws.com/personal-site-tim/react_svg.svg"
                      alt="react"
                    />
                  </div>
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
                      src="https://s3.amazonaws.com/personal-site-tim/fi-foundation.svg"
                      alt="zurb"
                    />
                  </div>
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
                      src="https://s3.amazonaws.com/personal-site-tim/html5_svg.svg"
                      alt="html"
                    />
                  </div>
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
                      src="https://s3.amazonaws.com/personal-site-tim/css_svg.svg"
                      alt="css"
                    />
                  </div>
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
                      src="https://s3.amazonaws.com/personal-site-tim/nodejs_svg.svg"
                      alt="nodejs"
                    />
                  </div>
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
                      src="https://s3.amazonaws.com/personal-site-tim/postgresql_svg.svg"
                      alt="postgres"
                    />
                  </div>
                  <div className="col">
                    <img
                      className={`${styles.techStackImg}`}
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
      </div>
    );
  }
}
