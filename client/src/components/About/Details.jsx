import React from 'react';
import styles from '../../../../css/components/Details.css';

export default function Details(props) {
  return (
    <div className={`container-fluid`}>
      <div className={`card ${styles.detailsBg}`}>
        <div className="card-block">
          <p className="card-text">
            My name is Tim and I'm a software engineer currently located in
            Orange County and Greater Los Angeles. I specialized in TDD, OOP,
            front-end frameworks, data-structures, and a primary focus in
            creating clean and simple front-ends.
          </p>
          <p className="card-text">
            With a background in insurance and finance, I am able to anaylze
            complex problems and identify the best solution, for my customers.
            This translate well to programming and web development because it
            provided me with a skillset on how to best approach a problem:
            <strong>asking the right questions.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
