import React from 'react';
import styles from '../../../../../../../css/components/Technical.css';

export default function BackEndTable(props) {
  return (
    <div className="container-fluid px-0">
      <img src="https://s3.amazonaws.com/personal-site-tim/skills/backend_server.png" />
      <h5>Back-End Development</h5>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <div className={styles.node} />
              <p className={styles.p}>NodeJS</p>
            </td>
            <td>
              <div className={styles.postgres} />
              <p className={styles.p}>PostgreSQL</p>
            </td>
            <td>
              <div className={styles.mysql} />
              <p className={styles.p}>MySQL</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.sql} />
              <p className={styles.p}>SQL</p>
            </td>
            <td>
              <div className={styles.mongo} />
              <p className={styles.p}>MongoDB</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}