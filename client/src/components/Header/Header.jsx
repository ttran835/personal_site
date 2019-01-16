import React from 'react';
import styles from '../../../../css/components/Header.css';

export default function Header(props) {
  return (
    <div
      className={`container-fluid px-0 ${styles.section} ${styles.paralax} `}
    >
      <div className={`row ${styles.adjustRowWidth}`}>
        <div className={`col col-md-2 ${styles.noPadding}`}>
          {' '}
          <img
            className={`img-fluid ${styles.leftSideHeaderImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/web.png"
          />
          <img
            className={`img-fluid ${styles.leftSideHeaderImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/webdesign.jpg"
          />
        </div>
        <div className={`col-12 col-md-auto ${styles.noPadding}`}>
          <img
            className={`img-fluid ${styles.programmerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/prgrammer_svg.svg"
          />
        </div>
        <div className={`col-12 col-md-auto ${styles.noPadding}`}>
          {' '}
          <img
            className={`img-fluid ${styles.businessImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/header/business_plan2.jpg"
          />
        </div>
        <div className={`row ${styles.noPadding}`}>
          <div class={`col col-lg-auto ${styles.lastPictureContainer}`}>
            <img
              className={`img-fluid ${styles.analysisImg}`}
              src="https://s3.amazonaws.com/personal-site-tim/header/analysis.jpg"
            />
            <img
              className={`img-fluid ${styles.statisticImg}`}
              src="https://s3.amazonaws.com/personal-site-tim/header/statistic_svg.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 <div class="row">
        <div class="col col-md-8">
         
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
      */
