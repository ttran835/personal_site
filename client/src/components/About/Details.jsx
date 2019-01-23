import React from 'react';
import styles from '../../../../css/components/Details.css';

export default function Details(props) {
  return (
    <div className={`container-fluid`}>
      <div className={`card ${styles.detailsBg}`}>
        <div class="card-block">
          <p class="card-text">
            Thank you for visiting my site. My name is Tim and I'm a software
            engineer operating in Orange County and Greater Los Angeles with a
            diverse set of skills and a knack for creating clean and simple
            front-ends.
          </p>
          <p class="card-text">
            With a background in insurance and financial planning, my passion
            for providing simple solutions to complex problems grew greater when
            I found out programming would able to provide me with an easier way
            to reach the most amount of people.
          </p>
        </div>
      </div>
    </div>
  );
}
