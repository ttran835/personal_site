import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../css/components/Technical.css';

export default function BackEnd(props) {
  return (
    <div className={`container-fluid`}>
      <Modal isOpen={props.modal} toggle={props.toggle} className={'hello'}>
        <ModalHeader toggle={props.toggle}>Back-End</ModalHeader>
        <ModalBody>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <div className={styles.node}>
                    <p>NodeJS</p>
                  </div>
                </td>
                <td>
                  <div className={styles.postgres}>
                    <p>PostgreSQL</p>
                  </div>
                </td>
                <td>
                  <div className={styles.mysql}>
                    <p>MySQL</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.sql}>
                    <p>SQL</p>
                  </div>
                </td>
                <td>
                  <div className={styles.mongo}>
                    <p>MongoDB</p>
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
