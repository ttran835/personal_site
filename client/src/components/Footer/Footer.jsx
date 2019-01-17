import React from 'react';
import styles from '../../../../css/components/Footer.css';

export default function Footer(props) {
  return (
    <div className="row justify-content-sm-center">
      <div className={`col col-sm-1 align-self-center ${styles.iconBg} `}>
        <div className={`${styles.shadow}`}>
          <a
            href="https://www.linkedin.com/in/timtran835/"
            target="_blank"
            className="card-link"
          >
            <img
              className={`img-fluid ${styles.footerImg}  `}
              src="https://s3.amazonaws.com/personal-site-tim/linkedin.svg"
            />
          </a>
        </div>
      </div>
      <div className={`col col-sm-1 ${styles.iconBg} `}>
        <a
          href="https://github.com/ttran835"
          target="_blank"
          className="card-link"
        >
          <img
            className={`img-fluid ${styles.footerImg}`}
            src="	https://s3.amazonaws.com/personal-site-tim/github_svg.svg"
          />
        </a>
      </div>

      <div className={`col col-sm-1 ${styles.iconBg} `}>
        <a
          href="https://angel.co/tim-tran-6"
          target="_blank"
          className="card-link"
        >
          <img
            className={`img-fluid ${styles.footerImg}`}
            src="https://s3.amazonaws.com/personal-site-tim/angellist.svg"
          />
        </a>
      </div>
    </div>
  );
}
