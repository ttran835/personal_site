import React from 'react';
import styles from '../../styles/Technical.module.scss';

export default function OthersTable(props) {
  return (
    <div className="container-fluid px-0">
      <img src="https://s3.amazonaws.com/personal-site-tim/skills/deploy.png" />
      <h5>Deployment/Others</h5>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>
              <div className={styles.newRelics} />
              <p className={styles.p}>New Relic</p>
            </td>
            <td>
              <div className={styles.agile} />
              <p className={styles.p}>AGILE</p>
            </td>
            <td>
              <img
                className="img-fluid"
                src="https://s3.amazonaws.com/personal-site-tim/skills/jekyll.png"
              />
              <p className={styles.p}>Jekyll</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.docker} />
              <p className={styles.p}>Docker</p>
            </td>
            <td>
              <div className={styles.nginx} />
              <p className={styles.p}>NGINX</p>
            </td>
            <td>
              <div className={styles.git} />
              <p className={styles.p}>GitHub</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
