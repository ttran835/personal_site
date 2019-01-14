import React from 'react';
import styles from '../../../../../../css/components/HrProjects.css';

export default function Shoedidas(props) {
  return (
    <div>
      <div className={`card ${styles.cardMargin}`}>
        <img
          className={`card-img-top img-fluid ${styles.imgBg}`}
          src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg"
          alt="Card image cap"
        />
        <div className="card-block">
          <h4 className="card-title">Shoedidas</h4>
          <p className="card-text">
            A project done with colleagues at Hack Reactor. The primary goal of
            the project is for our recreate the Adidas' product page from
            scratch as of December 2018.
          </p>
          <p>See GitHub for more details.</p>

          <a
            href="https://github.com/ttran835/Tim---Module"
            target="_blank"
            className="btn btn-primary"
          >
            View GitHub
          </a>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Launch demo modal
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
