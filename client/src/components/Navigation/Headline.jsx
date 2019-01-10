import React from 'react';
import styles from '../../../../css/components/Headline.css';

export default function Headline(props) {
  return (
    <div className={`container-fluid ${styles.title}`}>
      <h1 className={styles.heading1}>
        <strong>-- TIM TRAN --</strong>
      </h1>
    </div>
  );
}
