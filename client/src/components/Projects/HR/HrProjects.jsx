import React from 'react';
import styles from '../../../../../css/components/HrProjects.css';
import FrontierRealty from '../HR/Projects/FrontierRealty';
import Shoedidas from '../HR/Projects/Shoedidas';
import Sdc from '../HR/Projects/Sdc';

export default function HrProjects(props) {
  return (
    <div class="row container-fluid ">
      <div class="col-md-6 offset-md-3">
        <Shoedidas />

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
            <a href="#" target="_blank" className="btn btn-primary">
              View GitHub
            </a>
          </div>
        </div>

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
            <a
              href="https://github.com/ttran835/sample_jack"
              target="_blank"
              className="btn btn-primary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
