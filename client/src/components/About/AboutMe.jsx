import React from 'react';
import Technical from './Technical';
import Footer from '../Footer/Footer';

import styles from '../../../../css/components/AboutMe.css';

export default function About(props) {
  return (
    <div className={`container 0-px ${styles.noBorder}`}>
      <div className={`container ${styles.aboutMeBg} ${styles.shadow} `}>
        <div className="row">
          <div className="col col-md-4">
            <img
              className={`img-thumbnail ${styles.aboutMeImg}`}
              src="https://s3.amazonaws.com/personal-site-tim/48270361_10218535878854978_2309076050140725248_o.jpg"
            />
          </div>
          <div className="col col-lg-8">
            <div className={`jumbotron ${styles.jumboTronBg}`}>
              <h3 className="display-3">Hello!</h3>
              <h4 className="display-3">
                I'm <strong>Tim Tran</strong>
              </h4>
              <p className="lead">
                Software Engineer and advocate for financial literacy.
              </p>
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Email</th>
                    <td>timsters93@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>1 (714) - 902 - 7622</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`container-fluid ${styles.aboutMeFooter}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
