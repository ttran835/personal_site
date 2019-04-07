import React from 'react';
import styles from '../../../../css/components/Headline.css';

export default function Headline(props) {
  return (
    <div className={`jumbotron jumbotron-fluid ${styles.title}`}>
      <div className="container">
        <p className="lead">Hello I'm</p>

        <h1 className="display-3">Test Name</h1>
        <h4 className="card-subtitle mb-2 text-muted">
          {' '}
          And I'm Software Engineer
        </h4>
      </div>
    </div>
  );
}
{
  /* <div className={`container-fluid ${styles.title}`}>
<h1 className={styles.heading1}>
  <strong>-- TIM TRAN --</strong>
</h1>
</div> */
}
