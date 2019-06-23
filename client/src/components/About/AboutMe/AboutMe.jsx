import React from 'react';
import Technical from '../Technical/Technical';
import Footer from '../../Footer/Footer';

import styles from './AboutMe.module.scss';

export default function About(props) {
  return (
    <div className={`container px-0 ${styles.noBorder}`}>
      <div className={`container px-0 ${styles.aboutMeBg} ${styles.shadow} `}>
        <div className="container">
          <div className="row ">
            <div className="col col-sm-4 align-self-center">
              <img
                className={`img-thumbnail ${styles.aboutMeImg} `}
                src="https://s3.amazonaws.com/personal-site-tim/48270361_10218535878854978_2309076050140725248_o.jpg"
              />
            </div>
            <div className="col col-lg-8 align-self-center">
              <div className={`jumbotron ${styles.jumboTronBg}`}>
                <span>Hello!</span>
                <h1>
                  I'm <strong>Tim Tran</strong>
                </h1>

                <p className="lead">Software Engineer</p>
                <hr className="my-4" />
                <table className="container table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Email</th>
                      <td>tim.t.tran835@gmail.com</td>
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
        </div>
        <div className={`container ${styles.aboutMeFooter}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
