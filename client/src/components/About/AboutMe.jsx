import React from 'react';
import Technical from './Technical';
import styles from '../../../../css/components/AboutMe.css';

export default function About(props) {
  const cardBgStyle = {
    backgroundColor: '#faf9f5',
  };

  return (
    <div className={`card text-center ${styles.noBorder}`}>
      <div className={`card-block ${styles.aboutMeBg}`}>
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
      </div>
    </div>
  );
}
