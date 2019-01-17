import React from 'react';
import Technical from './Technical';
import Footer from '../Footer/Footer';

import styles from '../../../../css/components/AboutMe.css';

export default function About(props) {
  return (
    <div className={`card text-center ${styles.noBorder}`}>
      <div className={`card-block ${styles.aboutMeBg} ${styles.shadow} `}>
        <h2 className="card-title">About Me</h2>
        <p
          className={` col-md-6 offset-md-3 card-text  ${
            styles.paragraphWidth
          }`}
        >
          This is where the about me section will go, for now it will just be
          some text to fill the place of it in order to resize and making sure
          that the information looks okay when the actual thing.
        </p>
        <div className={`container-fluid ${styles.aboutMeFooter}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
