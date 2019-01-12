import React from 'react';
import Technical from './Technical';
import styles from '../../../../css/components/AboutMe.css';

export default function About(props) {
  const cardBgStyle = {
    backgroundColor: '#e3e2e0',
  };

  return (
    <div className={`card text-center ${styles.noBorder}`}>
      <div className="card-block" style={cardBgStyle}>
        <h2 className="card-title">About Me</h2>
        <p
          className={` col-md-6 offset-md-3 card-text  ${
            styles.paragraphWidth
          }`}
        >
          I am a dedicated and experienced Software Engineer, who is passionate
          about developing sleek and intuitive User Interface in a market where
          consuers are in constant demand for better web browsing experience. I
          am a Software Engineer who is experienced with using ES6, Javascript,
          React, CSS, Foundation 6, Bootstrap, and Github for version control to
          deliver sleek and intuitive User Interface in a market where consumers
          are in constant demand for better web browsing experiences. I am also
          experience with working in a team using Agile method with effective
          communication to ensure deliverable are met.
        </p>

        <Technical />
      </div>
    </div>
  );
}
