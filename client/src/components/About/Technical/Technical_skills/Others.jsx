import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../css/components/Technical.css';

export default function Others(props) {
  return (
    <div className={`container-fluid`}>
      <Modal isOpen={props.modal} toggle={props.toggle} className={'hello'}>
        <ModalHeader toggle={props.toggle}>Deployment/Other Skills</ModalHeader>
        <ModalBody>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <div className={styles.newRelics}>
                    <p>NewRelics</p>
                  </div>
                </td>
                <td>
                  <div className={styles.agile}>
                    <p>AGILE</p>
                  </div>
                </td>
                <td>
                  <div className={styles.aws}>
                    <p>AWS</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.docker}>
                    <p>Docker</p>
                  </div>
                </td>
                <td>
                  <div className={styles.nginx}>
                    <p>NGINX</p>
                  </div>
                </td>
                <td>
                  <div className={styles.git}>
                    <p>GitHub</p>
                  </div>
                </td>
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
