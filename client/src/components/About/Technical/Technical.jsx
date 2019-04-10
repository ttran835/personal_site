import React, { Component } from 'react';
import styles from './styles/Technical.module.scss';

// Technical Skills Table
import FrontEndTable from './Technical_skills/Tables/FrontEndTable';
import BackEndTable from './Technical_skills/Tables/BackEndTable';
import OthersTable from './Technical_skills/Tables/OthersTable';

export default function Technical(props) {
  return (
    <div className="container-fluid">
      <div className={`row justify-content-center `}>
        <div className={`row justify-content-center ${styles.bg}`}>
          <div className={`col col-lg-10 ${styles.margin}`}>
            <div className={styles.frontEndBg}>
              <div className={styles.skillsOverlay}>
                <FrontEndTable />
              </div>
            </div>
          </div>
          <div className={`col col-sm-5 ${styles.margin}`}>
            <div className={`${styles.backEndBg}`}>
              <div className={styles.skillsOverlay}>
                <BackEndTable />
              </div>
            </div>
          </div>
          <div className="col col-sm-5">
            <div className={`${styles.othersBg}`}>
              <div className={styles.skillsOverlay}>
                <OthersTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
