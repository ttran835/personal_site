import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../css/components/Technical.css';

export default function FrontEnd(props) {
  return (
    <div className={`container-fluid text-center`}>
      <Modal isOpen={props.modal} toggle={props.toggle} className={'hello'}>
        <ModalHeader toggle={props.toggle}>Front-End</ModalHeader>
        <ModalBody>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <div className={styles.js}>
                    <p>JavaScript</p>
                  </div>
                </td>
                <td>
                  <div className={styles.react}>
                    <p>ReactJS</p>
                  </div>
                </td>
                <td>
                  <div className={styles.html5}>
                    <p>HTML5</p>
                  </div>
                </td>
                <td>
                  <div className={styles.css}>
                    <p>CSS</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.foundation}>
                    <p>Foundation6</p>
                  </div>
                </td>
                <td>
                  <div className={styles.jquery}>
                    <p>jQuery</p>
                  </div>
                </td>
                <td>
                  <div className={styles.sass}>
                    <p>Sass/SCSS</p>
                  </div>
                </td>
                <td>
                  <div className={styles.angular}>
                    <p>AngularJS</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.bootstrap}>
                    <p>Bootstrap</p>
                  </div>
                </td>
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
