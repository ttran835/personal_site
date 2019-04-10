import React from 'react';
import styles from './Resume.module.scss';

export default function Resume(props) {
  return (
    <div className={`row justify-content-center`}>
      <button className={styles.btnStyle}>Resume</button>
    </div>
  );
}
