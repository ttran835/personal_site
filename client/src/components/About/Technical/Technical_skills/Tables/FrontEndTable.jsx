import React from 'react';
import styles from '../../../../../../../css/components/Technical.css';

export default function FrontEndTable(props) {
  return (
    <div className="container-fluid px-0">
      <img src="https://s3.amazonaws.com/personal-site-tim/skills/macbook.png" />
      <h5>Front-End Web Development</h5>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <div className={styles.js} />
              <p className={styles.p}>JavaScript</p>
            </td>
            <td>
              <div className={styles.react} />
              <p className={styles.p}>ReactJS</p>
            </td>
            <td>
              <div className={styles.html5} />
              <p className={styles.p}>HTML5</p>
            </td>
            <td>
              <div className={styles.css} />
              <p className={styles.p}>CSS</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.foundation} />
              <p className={styles.p}>Foundation6</p>
            </td>
            <td>
              <div className={styles.jquery} />
              <p className={styles.p}>jQuery</p>
            </td>
            <td>
              <div className={styles.sass} />
              <p className={styles.p}>Sass/SCSS</p>
            </td>
            <td>
              <div className={styles.angular} />
              <p className={styles.p}>AngularJS</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.bootstrap} />
              <p className={styles.p}>Bootstrap</p>
            </td>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
