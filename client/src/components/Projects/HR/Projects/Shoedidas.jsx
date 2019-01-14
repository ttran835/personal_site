import React from 'react';
import styles from '../../../../../../css/components/HrProjects.css';

export default function Shoedidas(props) {
  return (
    <div class="card">
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-block">
        <button
          onClick={props.toHelpRender}
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
      </div>
    </div>
  );
}
