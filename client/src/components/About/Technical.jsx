import React from 'react';
import styles from '../../../../css/components/Technical.css';
// import Resume from '../../Resume.pdf';

export default function Technical(props) {
  return (
    <div className="container-fluid">
      <div className={`card text-center ${styles.bg}`}>
        <div className=" col-md-6 offset-md-3 card-block">
          <h3 className="card-title">EXPERTISE</h3>
          <h4 className="card-subtitle mb-2 text-muted">Front End</h4>
          <p className="card-text">
            ReactJS/Redux | jQuery | CSS | SCSS | AngularJS | Zurb Foundation |
            Bootstrap 4
          </p>

          <h4 className="card-subtitle mb-2 text-muted">Back End</h4>
          <p className="card-text">
            PostgreSQL | MySQL | SQL | MongoDB | ExpressJS | NodeJS
          </p>

          <h4 className="card-subtitle mb-2 text-muted">
            Deployment and Others
          </h4>
          <p className="card-text">
            Docker | AWS | EC2 | New Relics | LoaderIO | GitHub
          </p>

          <a
            href=""
            type="pdf"
            rel="resume"
            target="_blank"
            className="card-link"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
