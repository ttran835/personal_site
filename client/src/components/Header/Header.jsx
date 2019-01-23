import React from 'react';
import styles from '../../../../css/components/Header.css';

export default function Header(props) {
  return (
    <div className={styles.overlay}>
      <div
        className={`container-fluid px-0 ${styles.section} ${styles.paralax} `}
      >
        <div className={`row ${styles.adjustRowWidth}`}>
          <div className={`col col-lg-12 ${styles.noPadding}`}>
            {' '}
            <img
              className={`img-fluid ${styles.leftSideHeaderImg}`}
              src="https://s3.amazonaws.com/personal-site-tim/header/Header.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
