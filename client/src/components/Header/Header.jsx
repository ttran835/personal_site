import React from 'react';
import styles from '../../../../css/components/Header.css';

export default function Header(props) {
  return (
    <div
      className={`container-fluid px-0 ${styles.section} ${styles.paralax} `}
    >
      <div class="row">
        <div class="col col-md-8">
          <img
            className={`${styles.headerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/analysis.jpg"
          />
        </div>
        <div class="col-6 col-md-4">
          <img
            className={`${styles.headerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/blockchain.png"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6 col-md-4">
          <img
            className={`${styles.headerImg}`}
            src="	https://s3.amazonaws.com/personal-site-tim/header/business_plan.png"
          />
        </div>
        <div class="col-6 col-md-4">
          <img
            className={`${styles.headerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/business_plan2.jpg"
          />
        </div>
        <div class="col-6 col-md-4">
          <img
            className={`${styles.headerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/prgrammer_svg.svg"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <img
            className={`${styles.headerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/statistic_svg.svg"
          />
        </div>

        <div class="col-6">
          <img
            className={`${styles.headerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/web.png"
          />
        </div>
      </div>
      <img
        className={`${styles.headerImg}`}
        src="https://s3.amazonaws.com/personal-site-tim/header/webdesign.jpg"
      />
    </div>
  );
}
